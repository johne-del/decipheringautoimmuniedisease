// ============================================
// ENHANCED SEARCH UX
// ============================================

const NORMALIZATION_MAP = {
    'tired': 'fatigue',
    'exhausted': 'fatigue',
    'brainfog': 'brain fog',
    'stomach pain': 'abdominal pain',
    'belly pain': 'abdominal pain',
    'rash': 'skin rash',
    'ache': 'pain',
    'aches': 'pain',
    'joint pain': 'joint pain' // Ensure specific multi-word terms are preserved if needed
};

class EnhancedSearch {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchClear = document.querySelector('.search-clear');
        this.searchDropdown = document.getElementById('search-suggestions');
        this.debounceTimer = null;
        this.currentFocus = -1;
        this.suggestions = [];

        if (!this.searchInput) return;

        this.init();
    }

    init() {
        // Portal: Move dropdown to body
        if (this.searchDropdown && this.searchDropdown.parentElement !== document.body) {
            document.body.appendChild(this.searchDropdown);
        }

        // Debounced input handler
        this.searchInput.addEventListener('input', (e) => {
            this.handleInput(e.target.value);
        });

        // Clear button
        this.searchClear.addEventListener('click', () => {
            this.clearSearch();
        });

        // Keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container') && !e.target.closest('#search-suggestions')) {
                this.closeDropdown();
            }
        });

        // Update position on resize/scroll
        const updatePos = () => {
            if (!this.searchDropdown.hidden) this.updatePosition();
        };
        window.addEventListener('resize', updatePos);
        window.addEventListener('scroll', updatePos, { passive: true });

        // Check for URL parameter on load
        this.checkUrlParams();
    }

    updatePosition() {
        if (!this.searchInput || !this.searchDropdown) return;
        const rect = this.searchInput.getBoundingClientRect();

        const GAP = 8;
        this.searchDropdown.style.top = (rect.bottom + GAP) + 'px';

        if (window.innerWidth < 600) {
            // Mobile full width
            this.searchDropdown.style.left = '12px';
            this.searchDropdown.style.width = 'calc(100vw - 24px)';
        } else {
            // Desktop fixed width centered
            const DROPDOWN_WIDTH = 420;
            let left = rect.left + (rect.width / 2) - (DROPDOWN_WIDTH / 2);

            // Boundary checks
            const MIN_margin = 16;
            if (left < MIN_margin) left = MIN_margin;
            if (left + DROPDOWN_WIDTH > window.innerWidth - MIN_margin) {
                left = window.innerWidth - MIN_margin - DROPDOWN_WIDTH;
            }

            this.searchDropdown.style.left = left + 'px';
            this.searchDropdown.style.width = DROPDOWN_WIDTH + 'px';
        }
    }

    handleInput(value) {
        // Show/hide clear button
        this.searchClear.style.display = value ? 'flex' : 'none';

        // Debounce
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            if (value.trim().length >= 2) {
                this.showSuggestions(value);
            } else {
                this.closeDropdown();
                // Reset to all diseases if on listing page
                if (typeof renderCards === 'function') {
                    renderCards(diseases);
                }
            }
        }, 200);
    }

    showSuggestions(query) {
        if (!fuse) {
            fuse = new Fuse(diseases, fuseOptions);
        }

        // 1. Normalization
        const lowerQuery = query.toLowerCase().trim();
        let effectiveQuery = query;
        if (NORMALIZATION_MAP[lowerQuery]) {
            effectiveQuery = NORMALIZATION_MAP[lowerQuery];
        }

        // 2. Search
        let results = fuse.search(effectiveQuery);
        // Limit total results processed
        results = results.slice(0, 8);

        // 3. Exact Match Boost
        // Prioritize exact name matches or exact symptom matches
        results.sort((a, b) => {
            const aName = a.item.name.toLowerCase();
            const bName = b.item.name.toLowerCase();
            const q = effectiveQuery.toLowerCase();

            // Exact name match gets highest priority
            if (aName === q && bName !== q) return -1;
            if (bName === q && aName !== q) return 1;

            // Score fallback (lower is better in Fuse)
            return (a.score || 0) - (b.score || 0);
        });

        this.suggestions = this.groupSuggestions(results, effectiveQuery);
        this.renderSuggestions();
        this.openDropdown();
    }

    groupSuggestions(results, query) {
        const conditions = [];
        const symptoms = new Set();
        const categories = new Set();

        // Extract matches
        results.forEach(result => {
            const disease = result.item;

            // Condition matches - STRICT check on name
            // Only show in Conditions group if the NAME matches the query
            if (disease.name.toLowerCase().includes(query.toLowerCase())) {
                if (conditions.length < 5) {
                    conditions.push({
                        type: 'condition',
                        label: disease.name,
                        sublabel: disease.category,
                        data: disease
                    });
                }
            }

            // Symptom matches
            disease.symptoms?.forEach(symptom => {
                if (symptom.toLowerCase().includes(query.toLowerCase())) {
                    symptoms.add(symptom);
                }
            });

            // Category matches
            if (disease.category.toLowerCase().includes(query.toLowerCase())) {
                categories.add(disease.category);
            }
        });

        // Build grouped suggestions (max 8 total)
        const grouped = [];
        let count = 0;

        if (conditions.length > 0) {
            grouped.push({
                label: 'Conditions',
                items: conditions.slice(0, Math.min(5, 8 - count))
            });
            count += conditions.length;
        }

        if (symptoms.size > 0 && count < 8) {
            const symptomItems = Array.from(symptoms).slice(0, 8 - count).map(s => ({
                type: 'symptom',
                label: s,
                sublabel: 'Symptom',
                data: s
            }));
            grouped.push({
                label: 'Symptoms',
                items: symptomItems
            });
            count += symptomItems.length;
        }

        if (categories.size > 0 && count < 8) {
            const categoryItems = Array.from(categories).slice(0, 8 - count).map(c => ({
                type: 'category',
                label: c,
                sublabel: 'Category',
                data: c
            }));
            grouped.push({
                label: 'Categories',
                items: categoryItems
            });
        }

        return grouped;
    }

    renderSuggestions() {
        let html = '';

        this.suggestions.forEach(group => {
            html += `<div class="suggestion-group">`;
            html += `<div class="suggestion-group-label">${group.label}</div>`;

            group.items.forEach((item, index) => {
                html += `
                    <div class="suggestion-item" 
                         role="option" 
                         data-type="${item.type}"
                         data-index="${index}">
                        <span class="suggestion-item-label">${item.label}</span>
                        <span class="suggestion-item-sublabel">${item.sublabel}</span>
                    </div>
                `;
            });

            html += `</div>`;
        });

        this.searchDropdown.innerHTML = html;

        // Add click handlers
        this.searchDropdown.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                this.selectSuggestion(item);
            });
        });
    }

    selectSuggestion(item) {
        const type = item.dataset.type;
        const label = item.querySelector('.suggestion-item-label').textContent;

        // Find the full data
        let data = null;
        this.suggestions.forEach(group => {
            const found = group.items.find(i => i.label === label);
            if (found) data = found.data;
        });

        if (type === 'condition') {
            // Open modal if available, otherwise navigate
            if (typeof openModal === 'function') {
                openModal(data.name);
                this.closeDropdown();
            } else {
                const slug = data.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
                window.location.href = `/conditions/${slug}/`;
            }
        } else if (type === 'symptom' || type === 'category') {
            // Filter grid or navigate
            if (typeof performSearch === 'function') {
                this.searchInput.value = label;
                performSearch(label);
                if (typeof scrollToResults === 'function') scrollToResults();
                this.closeDropdown();
            } else {
                window.location.href = `/conditions/?q=${encodeURIComponent(label)}`;
            }
        }
    }

    handleKeyboard(e) {
        const items = this.searchDropdown.querySelectorAll('.suggestion-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.currentFocus++;
            if (this.currentFocus >= items.length) this.currentFocus = 0;
            this.setActive(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.currentFocus--;
            if (this.currentFocus < 0) this.currentFocus = items.length - 1;
            this.setActive(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (this.currentFocus > -1 && items[this.currentFocus]) {
                this.selectSuggestion(items[this.currentFocus]);
            } else if (this.searchInput.value.trim()) {
                // Run current search
                if (typeof performSearch === 'function') {
                    performSearch(this.searchInput.value);
                    if (typeof scrollToResults === 'function') scrollToResults();
                }
                this.closeDropdown();
            }
        } else if (e.key === 'Escape') {
            if (!this.searchDropdown.hidden) {
                this.closeDropdown();
            } else {
                this.clearSearch();
            }
        }
    }

    setActive(items) {
        items.forEach((item, index) => {
            if (index === this.currentFocus) {
                item.setAttribute('aria-selected', 'true');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.removeAttribute('aria-selected');
            }
        });
    }

    openDropdown() {
        this.updatePosition();
        this.searchDropdown.hidden = false;
        this.searchInput.setAttribute('aria-expanded', 'true');
        this.currentFocus = -1;
    }

    closeDropdown() {
        this.searchDropdown.hidden = true;
        this.searchInput.setAttribute('aria-expanded', 'false');
        this.currentFocus = -1;
    }

    clearSearch() {
        this.searchInput.value = '';
        this.searchClear.style.display = 'none';
        this.closeDropdown();

        // Reset grid if on listing page
        if (typeof renderCards === 'function') {
            renderCards(diseases);
        }
    }

    checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const query = params.get('q');
        if (query && typeof performSearch === 'function') {
            this.searchInput.value = query;
            performSearch(query);
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedSearch();
});
