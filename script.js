// Sample disease data
const diseases = [
    {
        name: "Rheumatoid Arthritis",
        category: "Musculoskeletal",
        icon: "fa-bone",
        summary: "A chronic condition where the immune system attacks the joints, causing pain, swelling, and stiffness.",
        description: `
            <p>Rheumatoid arthritis (RA) is a long-term autoimmune disorder that primarily affects your joints. Unlike wear-and-tear arthritis (osteoarthritis), RA occurs when your immune system mistakenly attacks the lining of your joints, causing a painful swelling that can eventually result in bone erosion and joint deformity.</p>
            <p>The inflammation associated with rheumatoid arthritis is what can damage other parts of the body as well. While new types of medications have improved treatment options dramatically, severe rheumatoid arthritis can still cause physical disabilities.</p>
        `,
        symptoms: [
            "Tender, warm, swollen joints",
            "Joint stiffness that is usually worse in the mornings and after inactivity",
            "Fatigue, fever and loss of appetite",
            "Issues affecting smaller joints first (fingers, toes)"
        ],
        causes: `<p>The exact cause of rheumatoid arthritis is unknown. It is an autoimmune disease, meaning the body's immune system attacks healthy tissue. Likely, a combination of genetics and environmental factors (like smoking or infection) triggers the disease in people who are susceptible.</p>`,
        diagnosis: [
            "Blood tests (Rheumatoid factor, Anti-CCP, ESR, CRP)",
            "Physical examination of joints",
            "X-rays or MRI scans to check for joint damage"
        ],
        treatment: `<p><strong>Medications:</strong> Disease-modifying antirheumatic drugs (DMARDs), NSAIDs, and biologics are commonly used.</p>
                    <p><strong>Therapy:</strong> Physical therapy can teach you exercises to keep your joints flexible.</p>
                    <p><strong>Lifestyle:</strong> Regular low-impact exercise and stress management are key.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Living with RA means balancing activity with rest. You may have "flares" where symptoms worsen, delivering periods of fatigue and pain. Emotional support groups and mental health care are important, as chronic pain can affect your mood.</p>`,
        help: `<p>Seek medical help if you experience sudden, severe joint pain, swelling accompanied by a fever, or if your current medications seem to stop working.</p>`,
        related: ["Lupus", "Sjögren’s Syndrome", "Psoriatic Arthritis"]
    },
    {
        name: "Ankylosing Spondylitis",
        category: "Musculoskeletal",
        icon: "fa-person",
        summary: "An inflammatory arthritis affecting the spine and large joints, causing stiffness and pain.",
        description: `
            <p>Ankylosing spondylitis (AS) is a rare type of arthritis that causes pain and stiffness in your spine. This lifelong condition, also known as Bechterew disease, usually starts in your lower back. Over time, it can spread up to your neck or damage joints in other parts of your body.</p>
            <p>"Ankylosis" means fused bones or other hard tissue. "Spondylitis" means inflammation in your spinal bones, or vertebrae. Severe cases can leave your spine hunched.</p>
        `,
        symptoms: [
            "Pain and stiffness in the lower back and hips",
            "Pain that worsens after inactivity and improves with movement",
            "Neck pain and fatigue",
            "Difficulty taking deep breaths if ribs are involved"
        ],
        causes: `<p>The specific cause is not known, though genetic factors seem to be involved. In particular, people who have a gene called HLA-B27 are at a greatly increased risk for developing ankylosing spondylitis.</p>`,
        diagnosis: [
            "Physical exam to test range of motion",
            "Imaging (X-rays, MRI)",
            "Blood tests for the HLA-B27 gene"
        ],
        treatment: `<p><strong>Medications:</strong> NSAIDs are often the first line of defense. Biologics (TNF blockers) are used for more severe cases.</p>
                    <p><strong>Physical Therapy:</strong> Crucial for maintaining flexibility and posture.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Regular exercise is the single most important thing you can do to manage AS. Swimming is excellent because it helps flexibility without jarring the spine. Good posture practice is also essential.</p>`,
        help: `<p>Contact your doctor if you have severe back pain that disrupts sleep, or if you develop eye pain, light sensitivity, or blurred vision (symptoms of uveitis, a related condition).</p>`,
        related: ["Psoriatic Arthritis", "Reactive Arthritis", "Inflammatory Bowel Disease"]
    },
    {
        name: "Psoriatic Arthritis",
        category: "Musculoskeletal",
        icon: "fa-hand",
        summary: "A form of arthritis that affects some people who have the skin condition psoriasis.",
        description: `
            <p>Psoriatic arthritis is a form of arthritis that affects some people who have psoriasis — a condition that features red patches of skin topped with silvery scales. Most people develop psoriasis first and were later diagnosed with psoriatic arthritis, but the joint problems can sometimes begin before skin patches appear.</p>
            <p>Joint pain, stiffness and swelling are the main signs and symptoms of psoriatic arthritis. They can affect any part of your body, including your fingertips and spine, and can range from relatively mild to severe.</p>
        `,
        symptoms: [
            "Swollen fingers and toes (dactylitis)",
            "Foot pain, especially at the heel or sole",
            "Lower back pain",
            "Nail changes (pitting or separation)"
        ],
        causes: `<p>Psoriatic arthritis occurs when your body's immune system begins to attack healthy cells and tissue. The abnormal immune response causes inflammation in your joints and overproduction of skin cells. Both genetics and environment play a role.</p>`,
        diagnosis: [
            "Physical exam (checking for psoriasis patterns)",
            "X-rays",
            "MRI",
            "Blood tests (to rule out RA)"
        ],
        treatment: `<p><strong>Medications:</strong> NSAIDs, DMARDs, and biologics.</p>
                    <p><strong>Movement:</strong> Exercise helps keep joints flexible.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Managing both skin and joint symptoms can be challenging. Finding a rheumatologist and dermatologist who work together is helpful. Cold packs can help swollen joints.</p>`,
        help: `<p>See a doctor if you notice joint pain or swelling, especially if you already have psoriasis.</p>`,
        related: ["Psoriasis", "Rheumatoid Arthritis", "Ankylosing Spondylitis"]
    },
    {
        name: "Systemic Lupus Erythematosus (Lupus)",
        category: "Musculoskeletal",
        icon: "fa-disease",
        summary: "A systemic condition where the immune system attacks tissues throughout the body, including joints, skin, and organs.",
        description: `
            <p>Systemic lupus erythematosus (SLE), is the most common type of lupus. SLE is an autoimmune disease in which the immune system drives inflammation and tissue damage in various organs. It can affect the joints, skin, brain, lungs, kidneys, and blood vessels.</p>
            <p>There is no cure for lupus, but medical interventions and lifestyle changes can help control it. It is characterized by periods of illness, called flares, and periods of wellness, or remission.</p>
        `,
        symptoms: [
            "Fatigue",
            "Joint pain, stiffness and swelling",
            "Butterfly-shaped rash on the face",
            "Skin lesions that appear or worsen with sun exposure",
            "Fingers turning white or blue when cold (Raynaud's phenomenon)"
        ],
        causes: `<p>The cause is unknown. It may be linked to specific genes, but environmental triggers like sunlight, infections, or medications often set it off.</p>`,
        diagnosis: [
            "Antinuclear antibody (ANA) test",
            "Complete blood count (CBC)",
            "Urinalysis",
            "Kidney or skin biopsy"
        ],
        treatment: `<p><strong>Medications:</strong> Antimalarials (Hydroxychloroquine), corticosteroids, immunosuppressants, and biologics.</p>
                    <p><strong>Lifestyle:</strong> Sun protection is critical.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Lupus can be unpredictable. You may need to adjust your work or school schedule during flares. Wearing sunscreen daily is essential to prevent rashes and fatigue.</p>`,
        help: `<p>Seek help if you have chest pain, shortness of breath, confusion, or a fever without infection.</p>`,
        related: ["Rheumatoid Arthritis", "Sjögren’s Syndrome", "Scleroderma"]
    },
    {
        name: "Sjögren’s Syndrome",
        category: "Musculoskeletal",
        icon: "fa-eye-dropper",
        summary: "A disorder of the immune system identified by its two most common symptoms — dry eyes and a dry mouth.",
        description: `
            <p>Sjögren’s (SHOW-grins) syndrome is a disorder of your immune system identified by its two most common symptoms — dry eyes and a dry mouth. The condition often accompanies other immune system disorders, such as rheumatoid arthritis and lupus.</p>
            <p>in Sjögren’s syndrome, the mucous membranes and moisture-secreting glands of your eyes and mouth are usually affected first — resulting in decreased tears and saliva.</p>
        `,
        symptoms: [
            "Dry eyes (feeling like sand is in them)",
            "Dry mouth (cottonmouth)",
            "Joint pain, swelling and stiffness",
            "Swollen salivary glands",
            "Prolonged fatigue"
        ],
        causes: `<p>It is an autoimmune condition where the immune system attacks glandular cells. Genetic markers are associated with it, and viral or bacterial infections may trigger the onset.</p>`,
        diagnosis: [
            "Blood tests (SS-A and SS-B antibodies)",
            "Eye tests (Schirmer tear test)",
            "Lip biopsy"
        ],
        treatment: `<p><strong>Medications:</strong> Eye drops (artificial tears), drugs to increase saliva production, and NSAIDs for joint pain.</p>
                    <p><strong>Self-care:</strong> Sipping water frequently and using a humidifier.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Daily life involves managing dryness. Carrying a water bottle, using eye drops, and good dental hygiene (saliva protects teeth) are daily habits for patients.</p>`,
        help: `<p>See a doctor if you have persistent dry eyes or mouth for more than a few days, or if you develop swollen glands.</p>`,
        related: ["Rheumatoid Arthritis", "Lupus", "Primary Biliary Cholangitis"]
    },
    {
        name: "Polymyositis",
        category: "Musculoskeletal",
        icon: "fa-dumbbell",
        summary: "An uncommon inflammatory disease that causes muscle weakness affecting both sides of your body.",
        description: `
            <p>Polymyositis is an uncommon inflammatory disease that causes muscle weakness affecting both sides of your body. Having this condition can make it difficult to climb stairs, rise from a seated position, lift objects or reach overhead.</p>
            <p>It most commonly affects adults in their 30s, 40s or 50s. Signs and symptoms usually develop gradually over weeks or months.</p>
        `,
        symptoms: [
            "Muscle weakness (shoulders, hips, thighs)",
            "Fatigue",
            "Difficulty swallowing",
            "Pain in joints"
        ],
        causes: `<p>The exact cause is unknown. It shares characteristics with other autoimmune disorders, where the immune system attacks healthy body tissue. In this case, it attacks muscle fibers.</p>`,
        diagnosis: [
            "Blood tests (Muscle enzymes like CK)",
            "Electromyography (EMG)",
            "Muscle biopsy",
            "MRI"
        ],
        treatment: `<p><strong>Medications:</strong> High-dose corticosteroids are the main treatment. Immunosuppressants may also be used.</p>
                    <p><strong>Therapy:</strong> Physical therapy to regain muscle strength.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>As muscles weaken, you may need to learn new ways to do daily tasks. Pacing yourself is key. Speech therapy may be needed if swallowing is affected.</p>`,
        help: `<p>Seek help immediately if you have trouble breathing or swallowing.</p>`,
        related: ["Dermatomyositis", "Lupus", "Scleroderma"]
    },
    {
        name: "Dermatomyositis",
        category: "Musculoskeletal",
        icon: "fa-hand-holding-medical",
        summary: "An uncommon inflammatory disease marked by muscle weakness and a distinctive skin rash.",
        description: `
            <p>Dermatomyositis is a rare inflammatory disease marked by muscle weakness and a distinctive skin rash. The condition can affect adults and children. In adults, dermatomyositis usually occurs from the late 40s to early 60s. In children, it most often appears between 5 and 15 years of age.</p>
            <p>The rash can be violet-colored or dusky red and most often appears on the face and eyelids, knuckles, elbows, knees, chest and back.</p>
        `,
        symptoms: [
            "Skin rash (violet or red) on face, eyelids, knuckles",
            "Progressive muscle weakness (hips, thighs, shoulders)",
            "Difficulty swallowing",
            "Fatigue"
        ],
        causes: `<p>The cause is unknown, but it has much in common with autoimmune disorders. Genetics and environmental factors (viral infections, sun exposure) may play a role.</p>`,
        diagnosis: [
            "Skin biopsy",
            "Muscle biopsy",
            "Blood tests",
            "MRI"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids, Rituximab, and sun protection agents.</p>
                    <p><strong>Therapy:</strong> Physical therapy to maintain strength.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Sun protection is vital as the rash is sensitive to light. Swallowing difficulties may require dietary changes or speech therapy.</p>`,
        help: `<p>Call your doctor if you develop a new rash, muscle weakness, or shortness of breath.</p>`,
        related: ["Polymyositis", "Rheumatoid Arthritis", "Sjögren’s Syndrome"]
    },
    {
        name: "Celiac Disease",
        category: "Gastrointestinal",
        icon: "fa-bread-slice",
        summary: "An immune reaction to eating gluten, a protein found in wheat, barley, and rye.",
        description: `
            <p>Celiac disease is an autoimmune disorder that's triggered when you eat gluten. It's also known as celiac sprue, nontropical sprue, or gluten-sensitive enteropathy. Gluten is a protein found in wheat, barley, rye, and other grains.</p>
            <p>When someone with celiac disease eats something with gluten, their body overreacts to the protein and damages their villi, small finger-like projections found along the wall of their small intestine. When your villi are injured, your small intestine can't properly absorb nutrients from food.</p>
        `,
        symptoms: [
            "Diarrhea",
            "Fatigue",
            "Weight loss",
            "Bloating and gas",
            "Abdominal pain",
            "Nausea and vomiting",
            "Constipation"
        ],
        causes: `<p>Your genes combined with eating foods with gluten and other factors can contribute to celiac disease, but the precise cause isn't known. Infant feeding practices, gastrointestinal infections and gut bacteria might contribute, too.</p>`,
        diagnosis: [
            "Serology testing (blood tests)",
            "Genetic testing",
            "Endoscopy"
        ],
        treatment: `<p><strong>Diet:</strong> A strict gluten-free diet is the only way to manage celiac disease.</p>
                    <p><strong>Supplements:</strong> Vitamins and minerals to replace deficiencies.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Living with celiac disease means being vigilant about what you eat. You must learn to read labels carefully and be aware of cross-contamination in kitchens and restaurants.</p>`,
        help: `<p>Consult your doctor if you have digestive discomfort that lasts for more than two weeks.</p>`,
        related: ["Type 1 Diabetes", "Autoimmune Thyroid Disease", "Sjögren’s Syndrome"]
    },
    {
        name: "Crohn's Disease",
        category: "Gastrointestinal",
        icon: "fa-pills",
        summary: "A type of inflammatory bowel disease (IBD) that causes inflammation of your digestive tract.",
        description: `
            <p>Crohn's disease is a type of inflammatory bowel disease (IBD). It causes inflammation of your digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss and malnutrition.</p>
            <p>Inflammation caused by Crohn's disease can involve different areas of the digestive tract in different people. This inflammation often spreads deep into the layers of affected bowel tissue. Crohn's disease can be both painful and debilitating, and sometimes may lead to life-threatening complications.</p>
        `,
        symptoms: [
            "Diarrhea",
            "Fever",
            "Fatigue",
            "Abdominal pain and cramping",
            "Blood in your stool",
            "Mouth sores",
            "Reduced appetite and weight loss"
        ],
        causes: `<p>The exact cause of Crohn's disease remains unknown. Previously, diet and stress were suspected, but now doctors know that these factors may aggravate, but don't cause, Crohn's disease. Genetics and a malfunctioning immune system play a role.</p>`,
        diagnosis: [
            "Blood tests",
            "Stool studies",
            "Colonoscopy",
            "CT scan",
            "MRI"
        ],
        treatment: `<p><strong>Medications:</strong> Anti-inflammatory drugs, immune system suppressors, biologics, and antibiotics.</p>
                    <p><strong>Nutrition:</strong> Special diet (low residue) or IV nutrition (bowel rest).</p>
                    <p><strong>Surgery:</strong> If diet and lifestyle changes, drug therapy, or other treatments don’t relieve symptoms.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Stress doesn't cause Crohn's, but it can make your symptoms worse. Exercise, biofeedback, and relaxation exercises may help. Smoking increases the risk of developing Crohn's disease.</p>`,
        help: `<p>See your doctor if you have persistent changes in your bowel habits or if you have any of the signs and symptoms of Crohn's disease.</p>`,
        related: ["Ulcerative Colitis", "Psoriasis", "Ankylosing Spondylitis"]
    },
    {
        name: "Ulcerative Colitis",
        category: "Gastrointestinal",
        icon: "fa-procedures",
        summary: "An inflammatory bowel disease (IBD) that causes long-lasting inflammation and ulcers in your digestive tract.",
        description: `
            <p>Ulcerative colitis is an inflammatory bowel disease (IBD) that causes irritation, inflammation, and ulcers (open sores) in the lining of your large intestine (also called your colon). There is no specific cure for ulcerative colitis, but treatments can greatly reduce its signs and symptoms and even bring about long-term remission.</p>
            <p>Ulcerative colitis affects the innermost lining of your large intestine (colon) and rectum. Symptoms usually develop over time, rather than suddenly.</p>
        `,
        symptoms: [
            "Diarrhea, often with blood or pus",
            "Abdominal pain and cramping",
            "Rectal pain",
            "Rectal bleeding",
            "Urgency to defecate",
            "Inability to defecate despite urgency",
            "Weight loss",
            "Fatigue"
        ],
        causes: `<p>The exact cause is unknown. Researchers believe it may be the result of a complex interaction between genes, an abnormal immune system response, and something in the environment.</p>`,
        diagnosis: [
            "Stool tests",
            "Endoscopy (Colonoscopy or Flexible sigmoidoscopy)",
            "Biopsy",
            "CT scan"
        ],
        treatment: `<p><strong>Medications:</strong> 5-aminosalicylates, corticosteroids, immunomodulators, and biologics.</p>
                    <p><strong>Surgery:</strong> Proctocolectomy (removal of colon and rectum) is curative.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>You may need to limit dairy products, eat small meals, and drink plenty of liquids. Stress management is also key to preventing flare-ups.</p>`,
        help: `<p>See your doctor if you experience a persistent change in your bowel habits or if you have signs and symptoms such as abdominal pain, blood in your stool, or ongoing diarrhea.</p>`,
        related: ["Crohn's Disease", "Primary Sclerosing Cholangitis", "Ankylosing Spondylitis"]
    },
    {
        name: "Autoimmune Hepatitis",
        category: "Gastrointestinal",
        icon: "fa-notes-medical",
        summary: "Liver inflammation that occurs when your body's immune system attacks liver cells.",
        description: `
            <p>Autoimmune hepatitis is liver inflammation that occurs when your body's immune system turns against liver cells. The exact cause of autoimmune hepatitis is unclear, but genetic and environmental factors appear to interact over time in triggering the disease.</p>
            <p>Untreated autoimmune hepatitis can lead to scarring of the liver (cirrhosis) and eventually to liver failure. When diagnosed and treated early, however, autoimmune hepatitis can often be controlled with drugs that suppress the immune system.</p>
        `,
        symptoms: [
            "Fatigue",
            "Abdominal discomfort",
            "Joint pain",
            "Itching (pruritus)",
            "Yellowing of the skin and whites of the eyes (jaundice)",
            "Enlarged liver (hepatomegaly)",
            "Abnormal blood vessels on the skin (spider angiomas)"
        ],
        causes: `<p>Autoimmune hepatitis occurs when the body's immune system, which ordinarily attacks viruses, bacteria and other pathogens, targets the liver instead. This attack on your liver can lead to chronic inflammation and serious damage to liver cells.</p>`,
        diagnosis: [
            "Liver function tests",
            "Blood tests for autoantibodies",
            "Liver biopsy"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids (Prednisone) and Azathioprine (Imuran).</p>
                    <p><strong>Transplant:</strong> Liver transplant may be an option if the disease progresses to liver failure.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Eat a healthy diet, avoid alcohol, and check with your doctor before taking any new medications or herbal supplements, as these can affect the liver.</p>`,
        help: `<p>Seek medical attention if you notice signs of jaundice, persistent fatigue, or abdominal swelling.</p>`,
        related: ["Type 1 Diabetes", "Celiac Disease", "Ulcerative Colitis"]
    },
    {
        name: "Primary Biliary Cholangitis",
        category: "Gastrointestinal",
        icon: "fa-filter",
        summary: "A chronic disease in which the bile ducts in your liver are slowly destroyed.",
        description: `
            <p>Primary biliary cholangitis (also called PBC) is a chronic disease in which the bile ducts in your liver are slowly destroyed. Bile is a fluid made in your liver. It aids with digestion and helps your body get rid of cholesterol, toxins and worn-out red blood cells.</p>
            <p>When the bile ducts are damaged, bile can back up in your liver and sometimes lead to irreversible scarring of liver tissue (cirrhosis).</p>
        `,
        symptoms: [
            "Fatigue",
            "Itchy skin",
            "Dry eyes and mouth",
            "Pain in the upper right abdomen",
            "Swelling of the feet and ankles",
            "Darkening of the skin (hyperpigmentation)"
        ],
        causes: `<p>It's not clear what starts the process. Many experts consider primary biliary cholangitis to be an autoimmune disease in which the body turns against its own cells.</p>`,
        diagnosis: [
            "Blood tests (Anti-mitochondrial antibodies - AMA)",
            "Liver function tests",
            "Imaging (Ultrasound, MRCP, FibroScan)",
            "Liver biopsy"
        ],
        treatment: `<p><strong>Medications:</strong> Ursodeoxycholic acid (Ursodiol) and Obeticholic acid (Ocaliva).</p>
                    <p><strong>Symptom Management:</strong> Treatments for itching and fatigue.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Avoiding alcohol is critical. A reduced-sodium diet helps with swelling. Calcium and vitamin D supplements are often needed to prevent bone loss.</p>`,
        help: `<p>Contact your doctor if you have severe itching that disrupts sleep or new jaundice.</p>`,
        related: ["Sjögren’s Syndrome", "Autoimmune Thyroid Disease", "Scleroderma"]
    },
    {
        name: "Primary Sclerosing Cholangitis",
        category: "Gastrointestinal",
        icon: "fa-stream",
        summary: "A disease of the bile ducts which carries the digestive liquid bile from your liver to your small intestine.",
        description: `
            <p>Primary sclerosing cholangitis (PSC) is a disease of the bile ducts. Bile ducts carry the digestive liquid bile from your liver to your small intestine. In primary sclerosing cholangitis, inflammation causes scars within the bile ducts. These scars make the ducts hard and narrow and gradually cause serious liver damage.</p>
            <p>Most people with primary sclerosing cholangitis also have inflammatory bowel disease, such as ulcerative colitis or Crohn's disease.</p>
        `,
        symptoms: [
            "Fatigue",
            "Itching",
            "Jaundice",
            "Abdominal pain",
            "Fevers and chills"
        ],
        causes: `<p>It isn't clear what causes primary sclerosing cholangitis. An immune system reaction to an infection or toxin may trigger the disease in people who are genetically predisposed.</p>`,
        diagnosis: [
            "Liver function blood tests",
            "MRI of bile ducts (MRCP)",
            "Endoscopic retrograde cholangiopancreatography (ERCP)"
        ],
        treatment: `<p><strong>Procedures:</strong> Balloon dilation or stent placement to open blocked ducts.</p>
                    <p><strong>Medications:</strong> Antibiotics for infections.</p>
                    <p><strong>Surgery:</strong> Liver transplant is the only known cure for advanced PSC.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Regular monitoring is essential due to increased risk of bile duct cancer. If you have IBD, that must be managed concurrently.</p>`,
        help: `<p>Seek immediate care for high fever with shaking chills, which can indicate a bile duct infection (cholangitis).</p>`,
        related: ["Ulcerative Colitis", "Crohn's Disease", "Autoimmune Hepatitis"]
    },
    {
        name: "Autoimmune Gastritis",
        category: "Gastrointestinal",
        icon: "fa-utensils",
        summary: "A chronic inflammatory disease of the stomach lining that leads to damage of the parietal cells.",
        description: `
            <p>Autoimmune gastritis is a chronic inflammatory disease with eventual destruction of the parietal cells of the stomach. These cells produce acid and intrinsic factor, which are necessary for the absorption of Vitamin B12.</p>
            <p>The loss of these cells leads to low acid in the stomach (achlorhydria) and Vitamin B12 deficiency (pernicious anemia).</p>
        `,
        symptoms: [
            "Anemia symptoms (fatigue, weakness, pale skin)",
            "Numbness or tingling in hands and feet",
            "Feeling full soon after starting to eat",
            "Nausea and vomiting"
        ],
        causes: `<p>The body's immune system attacks the parietal cells. It is often associated with other autoimmune disorders like Hashimoto's disease or Type 1 diabetes.</p>`,
        diagnosis: [
            "Endoscopy with biopsy",
            "Blood tests for parietal cell antibodies",
            "Vitamin B12 level checks"
        ],
        treatment: `<p><strong>Vitamins:</strong> Vitamin B12 injections or high-dose oral supplements.</p>
                    <p><strong>Iron:</strong> Iron supplements if iron deficiency anemia is present.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Eating a balanced diet rich in iron and B12 is helpful, though supplements are usually required. Regular monitoring for stomach cancer risk is sometimes recommended.</p>`,
        help: `<p>See a doctor if you have symptoms of severe anemia like shortness of breath or chest pain.</p>`,
        related: ["Hashimoto's Thyroiditis", "Type 1 Diabetes", "Vitiligo"]
    },
    {
        name: "Multiple Sclerosis",
        category: "Neurological",
        icon: "fa-brain",
        summary: "A disease in which the immune system eats away at the protective covering of nerves.",
        description: `
            <p>Multiple sclerosis (MS) is a potentially disabling disease of the brain and spinal cord (central nervous system). In MS, the immune system attacks the protective sheath (myelin) that covers nerve fibers and causes communication problems between your brain and the rest of your body.</p>
            <p>Eventually, the disease can cause permanent damage or deterioration of the nerves.</p>
        `,
        symptoms: [
            "Numbness or weakness in one or more limbs",
            "Electric-shock sensations that occur with certain neck movements",
            "Tremor, lack of coordination or unsteady gait",
            "Vision problems"
        ],
        causes: `<p>The cause of multiple sclerosis is unknown. It's considered an autoimmune disease in which the body's immune system attacks its own tissues.</p>`,
        diagnosis: [
            "MRI",
            "Lumbar puncture (spinal tap)",
            "Evoked potential tests"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids, plasma exchange, and disease-modifying therapies (Ocrevus, Kesimpta, etc.).</p>
                    <p><strong>Therapy:</strong> Physical and occupational therapy.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Plenty of rest, exercise, keeping cool (heat can worsen symptoms), and a balanced diet are recommended.</p>`,
        help: `<p>See a doctor if you have a sudden onset of blurred vision, weakness, or numbness.</p>`,
        related: ["Neuromyelitis Optica", "Lupus", "Sjögren’s Syndrome"]
    },
    {
        name: "Myasthenia Gravis",
        category: "Neurological",
        icon: "fa-bolt",
        summary: "A chronic autoimmune disorder in which antibodies destroy the communication between nerves and muscle.",
        description: `
            <p>Myasthenia gravis is characterized by weakness and rapid fatigue of any of the muscles under your voluntary control. It is caused by a breakdown in the normal communication between nerves and muscles.</p>
            <p>There is no cure for myasthenia gravis, but treatment can help relieve signs and symptoms, such as weakness of arm or leg muscles, double vision, drooping eyelids, and difficulties with speech, chewing, swallowing and breathing.</p>
        `,
        symptoms: [
            "Drooping of one or both eyelids (ptosis)",
            "Double vision (diplopia)",
            "Impaired speaking (dysarthria)",
            "Difficulty swallowing",
            "Weakness in arms, legs, neck and fingers"
        ],
        causes: `<p>Your immune system produces antibodies that block or destroy many of your muscles' receptor sites for a neurotransmitter called acetylcholine. With fewer receptor sites available, your muscles receive fewer nerve signals.</p>`,
        diagnosis: [
            "Neurological examination",
            "Edrophonium test",
            "Ice pack test",
            "Blood analysis for antibodies"
        ],
        treatment: `<p><strong>Medications:</strong> Cholinesterase inhibitors, corticosteroids, and immunosuppressants.</p>
                    <p><strong>Therapy:</strong> Intravenous immunoglobulin (IVIg), plasmapheresis.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Adjusting your eating routine to when you have the most muscle strength is helpful. Installing grab bars in your home can prevent falls.</p>`,
        help: `<p><strong>Medical Emergency:</strong> Seek immediate care if you have difficulty breathing, seeing, swallowing, chewing, walking, or holding up your head.</p>`,
        related: ["Thyroid Disease", "Lupus", "Rheumatoid Arthritis"]
    },
    {
        name: "Guillain-Barré Syndrome",
        category: "Neurological",
        icon: "fa-virus",
        summary: "A rare disorder in which your body's immune system attacks your nerves.",
        description: `
            <p>Guillain-Barré (ghee-YAN bah-RAY) syndrome is a rare disorder in which your body's immune system attacks your nerves. Weakness and tingling in your hands and feet are usually the first symptoms.</p>
            <p>These sensations can quickly spread, eventually paralyzing your whole body. In its most severe form, Guillain-Barré syndrome is a medical emergency.</p>
        `,
        symptoms: [
            "Prickling, pins and needles sensations in your fingers, toes, ankles or wrists",
            "Weakness in your legs that spreads to your upper body",
            "Unsteady walking or inability to walk",
            "Difficulty with facial movements, including speaking, chewing or swallowing"
        ],
        causes: `<p>The exact cause is unknown. However, two-thirds of patients report symptoms of an infection in the six weeks preceding. These include COVID-19, respiratory or gastrointestinal infections, or Zika virus.</p>`,
        diagnosis: [
            "Spinal tap (lumbar puncture)",
            "Electromyography (EMG)",
            "Nerve conduction studies"
        ],
        treatment: `<p><strong>Plasma exchange (plasmapheresis):</strong> Removing the liquid portion of your blood and separating it from your blood cells.</p>
                    <p><strong>Immunoglobulin therapy:</strong> High doses of immunoglobulin containing healthy antibodies.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Recovery can be slow. You may need a wheelchair or other assistive devices during recovery. Physical therapy is essential to regain strength.</p>`,
        help: `<p><strong>Medical Emergency:</strong> Seek immediate medical attention if you have tingling or weakness that started in your feet or toes and is moving up your body.</p>`,
        related: ["CIDP", "Lupus", "Campylobacter Infection"]
    },
    {
        name: "Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)",
        category: "Neurological",
        icon: "fa-network-wired",
        summary: "A neurological disorder characterized by progressive weakness and impaired sensory function in the legs and arms.",
        description: `
            <p>CIDP is a rare neurological disorder. The body's immune system attacks the myelin sheaths (an insulating covering of the nerve cells) in the peripheral nerves. It is sometimes called the chronic form of Guillain-Barré syndrome.</p>
            <p>Symptoms come on more slowly than GBS, usually over at least 8 weeks.</p>
        `,
        symptoms: [
            "Tingling or numbness (beginning in toes and fingers)",
            "Weakness of the arms and legs",
            "Loss of deep tendon reflexes (areflexia)",
            "Fatigue"
        ],
        causes: `<p>The exact cause is unknown, but it is an autoimmune process where the body attacks the myelin of the peripheral nervous system.</p>`,
        diagnosis: [
            "Nerve conduction studies",
            "EMG",
            "Spinal fluid analysis"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids, IVIg.</p>
                    <p><strong>Procedures:</strong> Plasma exchange.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Regular physical therapy is important to maintain muscle strength and function. Orthotic devices may help with walking.</p>`,
        help: `<p>Contact your doctor if you notice progressive weakness or numbness in your limbs.</p>`,
        related: ["Guillain-Barré Syndrome", "Multiple Sclerosis", "Diabetes"]
    },
    {
        name: "Neuromyelitis Optica (NMO)",
        category: "Neurological",
        icon: "fa-eye-slash",
        summary: "Also known as Devic's disease, it affects the optic nerves and the spinal cord.",
        description: `
            <p>Neuromyelitis optica (NMO) is a central nervous system disorder that primarily affects the eye nerves (optic neuritis) and the spinal cord (myelitis).</p>
            <p>NMO is an autoimmune disease. It happens when your body's immune system reacts against its own healthy cells in the central nervous system, mainly in the optic nerves and spinal cord.</p>
        `,
        symptoms: [
            "Pain in the eye",
            "Vision loss",
            "Weakness or numbness in the arms and legs",
            "Bladder and bowel control problems",
            "Uncontrollable vomiting and hiccups"
        ],
        causes: `<p>Specific antibodies (NMO-IgG) attack proteins in the central nervous system, specifically aquaporin-4 water channels.</p>`,
        diagnosis: [
            "MRI",
            "Blood test for NMO-IgG antibody",
            "Spinal tap"
        ],
        treatment: `<p><strong>Relapse prevention:</strong> Eculizumab, Satralizumab, Inebilizumab.</p>
                    <p><strong>Acute attacks:</strong> Corticosteroids, plasmapheresis.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Heat may worsen symptoms. Support networks are vital as it can be a lifelong condition with potential for disability.</p>`,
        help: `<p>Seek help immediately for sudden vision loss or inability to move your legs.</p>`,
        related: ["Multiple Sclerosis", "Sjögren’s Syndrome", "Lupus"]
    },
    {
        name: "Autoimmune Encephalitis",
        category: "Neurological",
        icon: "fa-head-side-virus",
        summary: "A condition where the body's immune system attacks healthy brain cells, leading to inflammation of the brain.",
        description: `
            <p>Autoimmune encephalitis is a diverse group of conditions that occur when the body's immune system mistakenly attacks healthy brain cells, leading to inflammation.</p>
            <p>Symptoms can range from memory issues to psychosis and seizures. It can be triggered by a tumor (paraneoplastic) or by an infection, but often the cause is unknown.</p>
        `,
        symptoms: [
            "Memory deficits",
            "Seizures",
            "Psychosis or behavioral changes",
            "Impaired speech",
            "Balance issues"
        ],
        causes: `<p>Antibodies are produced that target specific receptors in the brain (e.g., NMDA receptor). Tumors (teratomas) can sometimes trigger this response.</p>`,
        diagnosis: [
            "MRI of the brain",
            "EEG",
            "Lumbar puncture (CSF analysis)",
            "Blood tests for specific antibodies"
        ],
        treatment: `<p><strong>First-line:</strong> Steroids, IVIg, Plasmapheresis.</p>
                    <p><strong>Second-line:</strong> Rituximab, Cyclophosphamide.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Recovery can be slow and may require rehabilitation for memory and cognitive skills. Family support is crucial due to the behavioral changes often seen.</p>`,
        help: `<p><strong>Medical Emergency:</strong> Seizures or sudden severe changes in behavior or consciousness require immediate emergency care.</p>`,
        related: ["Lupus", "Hashimoto's Encephalopathy", "Paraneoplastic Syndromes"]
    },
    {
        name: "Psoriasis",
        category: "Dermatological",
        icon: "fa-allergies",
        summary: "A skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp.",
        description: `
            <p>Psoriasis is a skin disease that causes a rash with itchy, scaly patches, most commonly on the knees, elbows, trunk and scalp. Psoriasis is a common, long-term (chronic) disease with no cure.</p>
            <p>It can be painful, interfere with sleep and make it hard to concentrate. The condition tends to go through cycles, flaring for a few weeks or months, then subsiding for a while.</p>
        `,
        symptoms: [
            "Red patches of skin covered with thick, silvery scales",
            "Dry, cracked skin that may bleed or itch",
            "Itching, burning or soreness",
            "Thickened, pitted or ridged nails"
        ],
        causes: `<p>Psoriasis is thought to be an immune system problem that causes skin cells to grow faster than usual. In the most common type of psoriasis, known as plaque psoriasis, this rapid turnover of cells results in dry, scaly patches.</p>`,
        diagnosis: [
            "Physical exam",
            "Skin biopsy"
        ],
        treatment: `<p><strong>Topical therapy:</strong> Corticosteroids, Vitamin D analogues, Retinoids.</p>
                    <p><strong>Light therapy:</strong> UVB phototherapy.</p>
                    <p><strong>Systemic medications:</strong> Biologics and oral retinoids.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Daily bathing, using moisturizers, covering affected areas overnight, and exposing skin to small amounts of sunlight can help.</p>`,
        help: `<p>If your psoriasis becomes severe or widespread or causes you discomfort and pain, see your doctor.</p>`,
        related: ["Psoriatic Arthritis", "Crohn's Disease", "Uveitis"]
    },
    {
        name: "Vitiligo",
        category: "Dermatological",
        icon: "fa-palette",
        summary: "A disease that causes the loss of skin color in blotches.",
        description: `
            <p>Vitiligo is a disease that causes loss of skin color in patches. The discolored areas usually get bigger with time. The condition can affect the skin on any part of the body. It can also affect hair and the inside of the mouth.</p>
            <p>Normally, the color of hair and skin is determined by melanin. Vitiligo occurs when the cells that produce melanin die or stop functioning.</p>
        `,
        symptoms: [
            "Patchy loss of skin color",
            "Premature whitening or graying of the hair on your scalp, eyelashes, eyebrows or beard",
            "Loss of color in the tissues that line the inside of the mouth and nose (mucous membranes)"
        ],
        causes: `<p>It is an autoimmune disorder where the immune system attacks the pigment-producing cells (melanocytes) in the skin.</p>`,
        diagnosis: [
            "Physical exam",
            "Skin biopsy",
            "Blood tests (to check for other autoimmune conditions)"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroid creams, Calcineurin inhibitors.</p>
                    <p><strong>Therapy:</strong> Light therapy (PUVA), Depigmentation (for widespread cases).</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Protecting your skin from the sun is vital, as depigmented skin burns easily. Using self-tanner or makeup can help manage appearance if desired.</p>`,
        help: `<p>See your doctor if areas of your skin, hair or mucous membranes lose coloring and it concerns you.</p>`,
        related: ["Thyroid Disease", "Alopecia Areata", "Psoriasis"]
    },
    {
        name: "Alopecia Areata",
        category: "Dermatological",
        icon: "fa-user",
        summary: "A condition that causes hair to fall out in small patches.",
        description: `
            <p>Alopecia areata is a condition that causes hair to fall out in small patches, which can be unnoticeable. These patches may connect, however, and then become noticeable. The condition develops when the immune system attacks the hair follicles, resulting in hair loss.</p>
            <p>Sudden hair loss may occur on the scalp, and in some cases the eyebrows, eyelashes, and face, as well as other parts of the body.</p>
        `,
        symptoms: [
            "Small round patches of hair loss on the scalp",
            "Exclamation mark hairs (hairs that get narrower at the bottom)",
            "Pitting (tiny dents) in fingernails or toenails"
        ],
        causes: `<p>The immune system mistakes hair follicles for foreign invaders and attacks them. Genetics appear to play a role.</p>`,
        diagnosis: [
            "Physical exam",
            "Scalp biopsy",
            "Blood tests"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroid injections, Topical minoxidil, Anthralin.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Hair loss can be emotionally challenging. Support groups can be helpful. Using sunscreen on the scalp or wearing hats is important for protection.</p>`,
        help: `<p>See your doctor if you are distressed by sudden or patchy hair loss.</p>`,
        related: ["Vitiligo", "Thyroid Disease", "Atopic Dermatitis"]
    },
    {
        name: "Pemphigus Vulgaris",
        category: "Dermatological",
        icon: "fa-droplet",
        summary: "A rare autoimmune disease that causes painful blistering on the skin and mucous membranes.",
        description: `
            <p>Pemphigus vulgaris is a rare autoimmune disease that causes painful blistering on the skin and mucous membranes. If you have an autoimmune disease, your immune system mistakenly attacks your healthy tissues.</p>
            <p>Pemphigus vulgaris is the most common type of a group of autoimmune disorders called pemphigus. Each type is characterized by the location of the blisters.</p>
        `,
        symptoms: [
            "Painful blisters that start in the mouth or skin areas",
            "Skin blisters that burst easily, leaving raw sores",
            "Crusting and oozing of sores"
        ],
        causes: `<p>The immune system produces antibodies to desmogleins, proteins that glue skin cells together. When these bonds are broken, fluid collects between the layers, forming blisters.</p>`,
        diagnosis: [
            "Skin biopsy",
            "Blood tests for desmoglein antibodies",
            "Direct immunofluorescence"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids (Prednisone), Rituximab (Rituxan).</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Gentle skin care is crucial. Avoid spicy or acidic foods if you have mouth blisters. Infection prevention is a major focus.</p>`,
        help: `<p>See your doctor if you have unexplained blistering inside your mouth or on your skin.</p>`,
        related: ["Myasthenia Gravis", "Bullous Pemphigoid", "Lupus"]
    },
    {
        name: "Bullous Pemphigoid",
        category: "Dermatological",
        icon: "fa-water",
        summary: "A rare skin condition that causes large, fluid-filled blisters to form on skin that is often itchy.",
        description: `
            <p>Bullous pemphigoid is a rare condition that causes large, fluid-filled blisters. These blisters develop on areas of skin that are common flex points — such as the lower abdomen, upper thighs or armpits. It is most common in older adults.</p>
            <p>Bullous pemphigoid occurs when your immune system attacks a thin layer of tissue below your outer layer of skin.</p>
        `,
        symptoms: [
            "Itchy skin (pruritus) which can be severe",
            "Large, tense blisters that don't rupture easily",
            "Reddish or hive-like rash before blisters appear"
        ],
        causes: `<p>The immune system produces antibodies to the basement membrane zone of the skin, causing separation of the skin layers and blistering.</p>`,
        diagnosis: [
            "Skin biopsy",
            "Blood tests"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroid creams or pills, Niacinamide, Immunosuppressants.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Avoid sun exposure which can trigger blisters. Wear loose-fitting cotton clothing to avoid friction on the skin.</p>`,
        help: `<p>See your doctor if you develop unexplained blistering or a severe itchy rash.</p>`,
        related: ["Pemphigus Vulgaris", "Psoriasis", "Lichen Planus"]
    },
    {
        name: "Cutaneous Lupus",
        category: "Dermatological",
        icon: "fa-sun",
        summary: "A form of lupus that primarily affects the skin, causing rashes and sores.",
        description: `
            <p>Cutaneous lupus erythematosus is an autoimmune disease where the immune system attacks healthy skin. It can exist alone or along with systemic lupus erythematosus (SLE).</p>
            <p>There are several types, including discoid lupus (causing scarring) and subacute cutaneous lupus (triggered by sun).</p>
        `,
        symptoms: [
            "Red, scaly rash (often in sun-exposed areas)",
            "Coin-shaped (discoid) lesions",
            "Hair loss (alopecia)",
            "Sun sensitivity"
        ],
        causes: `<p>Genetic predisposition combined with environmental triggers like UV light, stress, or smoking.</p>`,
        diagnosis: [
            "Skin biopsy",
            "Blood tests (ANA)",
            "Physical exam"
        ],
        treatment: `<p><strong>Topical:</strong> Steroid creams, Calcineurin inhibitors.</p>
                    <p><strong>Systemic:</strong> Hydroxychloroquine (Plaquenil).</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p><strong>Sun protection is non-negotiable.</strong> Use high SPF sunscreen, wear hats, and avoid peak sun hours. Smoking cessation helps reduce flares.</p>`,
        help: `<p>See distinct changes in your skin, especially after sun exposure.</p>`,
        related: ["Systemic Lupus Erythematosus", "Sjögren’s Syndrome", "Dermatomyositis"]
    },
    {
        name: "Lichen Planus",
        category: "Dermatological",
        icon: "fa-leaf",
        summary: "A condition that causes swelling and irritation in the skin, hair, nails and mucous membranes.",
        description: `
            <p>Lichen planus is a condition that causes swelling and irritation in the skin, hair, nails and mucous membranes. On the skin, lichen planus usually appears as purplish, itchy, flat bumps that develop over several weeks.</p>
            <p>In the mouth, vagina and other areas covered by a mucous membrane, lichen planus forms lacy white patches, sometimes with painful sores.</p>
        `,
        symptoms: [
            "Purplish, flat-topped bumps, most often on the inner forearm, wrist or ankle",
            "Itching",
            "Lacy white patches in the mouth",
            "Hair loss or nail damage"
        ],
        causes: `<p>It occurs when your immune system attacks cells of the skin or mucous membranes. The trigger is often unknown, though Hepatitis C infection is a risk factor.</p>`,
        diagnosis: [
            "Biopsy",
            "Hepatitis C test",
            "Allergy tests"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids (topical or oral), Retinoids, Antihistamines.</p>
                    <p><strong>Light therapy:</strong> UVB light.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>For oral lichen planus, avoid smoking and alcohol as they increase cancer risk. Cool compresses can soothe itchy skin.</p>`,
        help: `<p>See your doctor if tiny bumps or a rash appears on your skin for no known reason, particularly if you also have Hepatitis C.</p>`,
        related: ["Hepatitis C", "Alopecia Areata", "Vitiligo"]
    },
    {
        name: "Giant Cell Arteritis",
        category: "Cardiovascular",
        icon: "fa-heart-broken",
        summary: "An inflammation of the lining of your arteries.",
        description: `
            <p>Giant cell arteritis is an inflammation of the lining of your arteries. Most often, it affects the arteries in your head, especially those in your temples. For this reason, giant cell arteritis is sometimes called temporal arteritis.</p>
            <p>Giant cell arteritis frequently causes headaches, scalp tenderness, jaw pain and vision problems. Untreated, it can lead to blindness.</p>
        `,
        symptoms: [
            "Persistent, severe head pain, usually in your temple area",
            "Scalp tenderness",
            "Jaw pain when you chew or open your mouth wide",
            "Fever and fatigue",
            "Double vision or sudden permanent loss of vision in one eye"
        ],
        causes: `<p>The cause is uncertain. It is clearly an autoimmune process where the body's immune system attacks the artery walls.</p>`,
        diagnosis: [
            "Blood tests (ESR, CRP)",
            "Biopsy of the temporal artery",
            "Magnetic resonance angiography (MRA)"
        ],
        treatment: `<p><strong>Medications:</strong> High doses of corticosteroids (Prednisone) immediately to prevent vision loss.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Long-term steroid use has side effects, so monitoring bone density and blood pressure is important. A healthy diet and exercise help combat steroid side effects.</p>`,
        help: `<p><strong>Medical Emergency:</strong> If you have a new, persistent headache or any vision changes, seek immediate medical attention.</p>`,
        related: ["Polymyalgia Rheumatica", "Takayasu's Arteritis", "Lupus"]
    },
    {
        name: "Antiphospholipid Syndrome",
        category: "Cardiovascular",
        icon: "fa-tint-slash",
        summary: "A disorder in which the immune system mistakenly creates antibodies that attack tissues in the body, causing blood clots.",
        description: `
            <p>Antiphospholipid syndrome (APS) occurs when your immune system mistakenly creates antibodies that attack tissues in the body. These antibodies can cause blood clots to form in arteries and veins.</p>
            <p>It can also cause complications during pregnancy, such as miscarriage and stillbirth.</p>
        `,
        symptoms: [
            "Blood clots in legs (DVT) or lungs (PE)",
            "Repeated miscarriages or stillbirths",
            "Stroke",
            "Transient ischemic attack (TIA)",
            "Red rash with a lacy, net-like pattern (livedo reticularis)"
        ],
        causes: `<p>The body produces antibodies against proteins that bind to phospholipids, a type of fat found in blood cells. The trigger is unknown.</p>`,
        diagnosis: [
            "Blood tests for specific antibodies (anticardiolipin, beta-2 glycoprotein I, lupus anticoagulant)"
        ],
        treatment: `<p><strong>Medications:</strong> Blood thinners (Warfarin, Heparin, or Aspirin).</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Dietary changes may be needed if taking Warfarin (Vitamin K management). Regular exercise helps prevent clots, but avoid injury-prone activities due to bleeding risk.</p>`,
        help: `<p><strong>Medical Emergency:</strong> Seek immediate help for signs of stroke (face drooping, arm weakness) or pulmonary embolism (shortness of breath, chest pain).</p>`,
        related: ["Lupus", "Deep Vein Thrombosis", "Sjögren’s Syndrome"]
    },
    {
        name: "Takayasu Arteritis",
        category: "Cardiovascular",
        icon: "fa-heart-circle-exclamation",
        summary: "A rare type of vasculitis that causes inflammation in the aorta and its main branches.",
        description: `
            <p>Takayasu's arteritis is a rare type of vasculitis, a group of disorders that cause blood vessel inflammation. It primarily damages the aorta (the large artery carrying blood from your heart to the rest of your body) and its main branches.</p>
            <p>The disease can lead to narrowed or blocked arteries, or to weakened artery walls that may bulge (aneurysm) and tear.</p>
        `,
        symptoms: [
            "Weak or absent pulse in the arms",
            "Dizziness or lightheadedness",
            "Chest pain",
            "High blood pressure",
            "Fatigue"
        ],
        causes: `<p>The cause of the initial inflammation is unknown. It is likely an autoimmune reaction triggered by a virus or other infection.</p>`,
        diagnosis: [
            "Angiography (MRA or CTA)",
            "Blood tests for inflammation markers"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids to control inflammation. Immunosuppressants.</p>
                    <p><strong>Surgery:</strong> Bypass surgery or stenting if arteries are severely blocked.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Regular check-ups are mandated to monitor blood pressure and vessel health. Controlling other risk factors like cholesterol is vital.</p>`,
        help: `<p>Seek help for chest pain, shortness of breath, or signs of a stroke.</p>`,
        related: ["Giant Cell Arteritis", "Crohn's Disease", "Sarcoidosis"]
    },
    {
        name: "Polyarteritis Nodosa (PAN)",
        category: "Cardiovascular",
        icon: "fa-project-diagram",
        summary: "A rare disease that results in inflammation of blood vessels, causing injury to organ systems.",
        description: `
            <p>Polyarteritis nodosa (PAN) is a rare disease that results in inflammation of medium-sized blood vessels (vasculitis). The inflammation damages the blood vessel walls, reducing the flow of blood to organs.</p>
            <p>It can affect any organ, but most commonly the nerves, intestinal tract, heart, joints and kidneys.</p>
        `,
        symptoms: [
            "Fatigue and fever",
            "Muscle aches and joint pain",
            "Abdominal pain",
            "Numbness or tingling in extremities",
            "Skin sores or tender lumps"
        ],
        causes: `<p>The cause is unknown in most cases. It is sometimes associated with Hepatitis B or C infections.</p>`,
        diagnosis: [
            "Biopsy of affected tissue",
            "Angiogram",
            "Blood tests (checking for Hepatitis B/C)"
        ],
        treatment: `<p><strong>Medications:</strong> High-dose corticosteroids, Cyclophosphamide.</p>
                    <p><strong>Antivirals:</strong> If Hepatitis is the cause.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Treatment can be long-term. Controlling blood pressure is important to protect the kidneys.</p>`,
        help: `<p>Seek help for severe abdominal pain or sudden loss of sensation in a limb.</p>`,
        related: ["Hepatitis B", "Vasculitis", "Lupus"]
    },
    {
        name: "Vasculitis (General)",
        category: "Cardiovascular",
        icon: "fa-heartbeat",
        summary: "An inflammation of the blood vessels. It causes changes in the blood vessel walls, including thickening, weakening, narrowing or scarring.",
        description: `
            <p>Vasculitis is a general term for several conditions that cause inflammation of the blood vessels. It can affect very small blood vessels (capillaries), medium-size blood vessels (arterioles and venules), or large blood vessels (arteries and veins).</p>
            <p>When blood vessels are inflamed, they may become weakened and stretch, leading to aneurysms, or become so thin that they rupture.</p>
        `,
        symptoms: [
            "Fever",
            "Headache",
            "Fatigue",
            "Weight loss",
            "General aches and pains",
            "Specifically depends on affected organ (e.g., spots on skin, shortness of breath)"
        ],
        causes: `<p>Often unknown. Can be related to allergic reactions, infections, or other immune system diseases like Lupus or RA.</p>`,
        diagnosis: [
            "Blood tests (ANCA, ESR, CRP)",
            "Urinalysis",
            "Imaging (X-ray, PET, Angiography)",
            "Biopsy"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids (Prednisone) are the mainstay. Methotrexate or Rituximab for maintenance.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Understanding the side effects of medications is key. Infection prevention is important while on immunosuppressants.</p>`,
        help: `<p>Seek help for difficulty breathing, blood in urine, or severe abdominal pain.</p>`,
        related: ["Granulomatosis with Polyangiitis", "Lupus", "Rheumatoid Arthritis"]
    },
    {
        name: "Uveitis",
        category: "Ocular",
        icon: "fa-eye",
        summary: "A form of eye inflammation. It affects the middle layer of tissue in the eye wall (uvea).",
        description: `
            <p>Uveitis is a form of eye inflammation. It affects the middle layer of tissue in the eye wall (uvea). Uveitis warning signs often come on suddenly and get worse quickly. They include eye redness, pain and blurred vision.</p>
            <p>The condition can affect one or both eyes, and it can affect people of all ages, even children. Possible causes include infection, injury, or an autoimmune or inflammatory disease.</p>
        `,
        symptoms: [
            "Eye redness",
            "Eye pain",
            "Light sensitivity",
            "Blurred vision",
            "Dark, floating spots in your field of vision (floaters)",
            "Decreased vision"
        ],
        causes: `<p>Often the cause is unknown. It is frequently associated with autoimmune disorders such as AIDS, Ankylosing Spondylitis, Behçet's disease, Psoriasis, and Rheumatoid Arthritis.</p>`,
        diagnosis: [
            "Eye exams",
            "Blood tests",
            "Analysis of eye fluid"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroid eye drops, injections, or oral tablets. Immunosuppressive drugs.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Wearing dark glasses can help with light sensitivity. Managing any underlying autoimmune condition is key to preventing recurrence.</p>`,
        help: `<p>Contact your doctor if you have significant eye pain or unexpected vision problems.</p>`,
        related: ["Ankylosing Spondylitis", "Sarcoidosis", "Crohn's Disease"]
    },
    {
        name: "Optic Neuritis",
        category: "Ocular",
        icon: "fa-low-vision",
        summary: "Inflammation that damages the optic nerve, a bundle of nerve fibers that transmits visual information from your eye to your brain.",
        description: `
            <p>Optic neuritis occurs when the immune system mistakenly targets the myelin covering the optic nerve, resulting in inflammation and damage. It interferes with the transmission of visual signals to the brain.</p>
            <p>It is often an early indicator of Multiple Sclerosis (MS).</p>
        `,
        symptoms: [
            "Pain that worsens with eye movement",
            "Temporary vision loss in one eye",
            "Loss of color vision (colors appear washed out)",
            "Flashing lights (photopsia)"
        ],
        causes: `<p>The exact cause is unknown, but it is strongly linked to MS, Neuromyelitis Optica, and Lupus.</p>`,
        diagnosis: [
            "Routine eye exam",
            "Ophthalmoscopy",
            "Pupillary light reaction test",
            "MRI"
        ],
        treatment: `<p><strong>Medications:</strong> Intravenous (IV) corticosteroids to speed up recovery.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Vision usually returns, but some damage may remain. Good lighting and high-contrast texts can help.</p>`,
        help: `<p>Seek immediate care for sudden vision loss or pain with eye movement.</p>`,
        related: ["Multiple Sclerosis", "Neuromyelitis Optica", "Lupus"]
    },
    {
        name: "Autoimmune Retinopathy",
        category: "Ocular",
        icon: "fa-circle-dot",
        summary: "A rare disease where the body's immune system attacks proteins in the retina, leading to vision loss.",
        description: `
            <p>Autoimmune retinopathy (AIR) is a rare spectrum of diseases. The immune system produces autoantibodies that attack retinal proteins, causing photoreceptor cells (rods and cones) to degenerate.</p>
            <p>It can occur on its own (non-paraneoplastic) or be associated with an underlying cancer (paraneoplastic).</p>
        `,
        symptoms: [
            "Night blindness",
            "Sensitivity to light (photophobia)",
            "Shimmering, dancing lights in vision (photopsias)",
            "Loss of peripheral or central vision"
        ],
        causes: `<p>Autoantibodies target specific retinal antigens (like recoverin). It may be triggered by a tumor elsewhere in the body.</p>`,
        diagnosis: [
            "Electroretinogram (ERG)",
            "Visual field testing",
            "Blood tests for anti-retinal antibodies"
        ],
        treatment: `<p><strong>Medications:</strong> Corticosteroids, IVIg, Rituximab.</p>
                    <p><strong>Supplements:</strong> Vitamins that support eye health (AREDS).</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Adjusting to vision loss may require working with a low-vision specialist. Sunglasses and hats help with glare.</p>`,
        help: `<p>See a specialist if you experience shimmering lights or progressive night blindness.</p>`,
        related: ["Melanoma", "Lupus", "Breast Cancer (Paraneoplastic)"]
    },
    {
        name: "Sjögren’s Syndrome (Ocular)",
        category: "Ocular",
        icon: "fa-eye-dropper",
        summary: "The ocular manifestation of Sjögren’s, focusing on severe dry eye and corneal damage.",
        description: `
            <p>While Sjögren’s is systemic, its ocular form is devastating to the eye's surface. The immune system attacks the lacrimal (tear-producing) glands. Without tears, the eye surface becomes desiccated and inflamed.</p>
            <p>Chronic dry eye can lead to corneal ulcers and scarring if untreated.</p>
        `,
        symptoms: [
            "Gritty, burning, or stinging sensation in the eyes",
            "Blurred vision",
            "Redness",
            "Sensitivity to light",
            "Stringy mucous around the eyes"
        ],
        causes: `<p>Lymphocytic infiltration of the lacrimal glands destroys the tissue responsible for aqueous tear production.</p>`,
        diagnosis: [
            "Schirmer's test (measure tear production)",
            "Slit-lamp exam with staining dyes",
            "Blood tests (SS-A, SS-B)"
        ],
        treatment: `<p><strong>Medications:</strong> Prescription eye drops (Restasis, Xiidra), Autologous serum drops.</p>
                    <p><strong>Procedures:</strong> Punctal plugs to keep tears in the eye.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Use a humidifier at home. Avoid fans blowing directly on your face. Take frequent breaks from screens to blink.</p>`,
        help: `<p>See a doctor if you have eye pain or vision changes that don't improve with over-the-counter drops.</p>`,
        related: ["Sjögren’s Syndrome", "Rheumatoid Arthritis", "Lupus"]
    },
    {
        name: "Ocular Cicatricial Pemphigoid",
        category: "Ocular",
        icon: "fa-glasses",
        summary: "A chronic autoimmune disease that causes scarring of the conjunctiva (the mucous membrane covering the eye).",
        description: `
            <p>Ocular cicatricial pemphigoid (OCP) is a subset of mucous membrane pemphigoid. It is a chronic, progressive, autoimmune disease. Antibodies attack the basement membrane of the conjunctiva.</p>
            <p>It leads to scarring (cicatrization) which can turn eyelashes inward (trichiasis), further damaging the cornea, and can lead to blindness.</p>
        `,
        symptoms: [
            "Red eye (conjunctivitis) that doesn't heal",
            "Feeling of something in the eye",
            "Tearing",
            "Eyelashes turning inward",
            "Symblepharon (eyelid sticking to the eyeball)"
        ],
        causes: `<p>Autoantibodies attack the basement membrane zone proteins in the mucous membranes.</p>`,
        diagnosis: [
            "Biopsy of the conjunctiva",
            "Direct immunofluorescence"
        ],
        treatment: `<p><strong>Systemic Therapy:</strong> Dapsone, Methotrexate, Cyclophosphamide, IVIg.</p>
                    <p><strong>Surgery:</strong> To correct eyelid position, but only after inflammation is controlled.</p>
                    <p><em>Note: Treatment plans vary by individual. Always consult your doctor.</em></p>`,
        living: `<p>Strict adherence to medication is needed to stop progression. Frequent lubrication of the eye helps comfort.</p>`,
        help: `<p>Seek help immediately for a red eye that persists, or if you feel your eyelashes rubbing against your eye.</p>`,
        related: ["Pemphigoid", "Stevens-Johnson Syndrome", "Lupus"]
    }
];

// DOM Elements
const grid = document.getElementById('condition-grid');
const searchInputs = document.querySelectorAll('.search-bar, .hero-search input');
const noResults = document.getElementById('no-results');
const modal = document.getElementById('disease-modal');
const modalClose = document.getElementById('modal-close');
const symptomTagsContainer = document.getElementById('symptom-tags');

// Extract Top Symptoms (simple frequency counter could be added, here we just take unique ones or manual list)
// For simplicity, let's pick some common ones from the data.
const commonSymptoms = ["Fatigue", "Fever", "Joint pain", "Diarrhea", "Skin lesions", "Vision problems", "Weight loss"];

function renderSymptomTags() {
    if (!symptomTagsContainer) return;
    symptomTagsContainer.innerHTML = '';
    commonSymptoms.forEach(symptom => {
        const tag = document.createElement('span');
        tag.className = 'symptom-tag';
        tag.textContent = symptom;
        tag.addEventListener('click', () => {
            // Toggle active state
            document.querySelectorAll('.symptom-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');

            // Filter
            searchInputs.forEach(input => input.value = symptom); // Visual feedback in search
            performSearch(symptom);
            scrollToResults(); // Scroll on tag click
        });
        symptomTagsContainer.appendChild(tag);
    });
}

// Mobile Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon between bars and times
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Highlight Helper
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="highlight">$1</mark>');
}

// Initial Render
function renderCards(data, highlightQuery = '') {
    if (!grid) return;
    grid.innerHTML = '';

    if (data.length === 0) {
        if (noResults) noResults.style.display = 'block';
        return;
    } else {
        if (noResults) noResults.style.display = 'none';
    }

    data.forEach(item => {
        // Handle both direct disease objects and Fuse result objects
        const disease = item.item ? item.item : item;

        const card = document.createElement('div');
        card.className = 'condition-card';
        // Add data-category for semantic coloring
        if (disease.category) {
            card.setAttribute('data-category', disease.category.toLowerCase());
        }

        // Apply highlighting
        const nameHtml = highlightText(disease.name, highlightQuery);
        const summaryHtml = highlightText(disease.summary, highlightQuery);

        card.innerHTML = `
            <div class="condition-image">
                <i class="fas ${disease.icon || 'fa-disease'} fa-3x"></i>
            </div>
            <div class="condition-content">
                <h3>${nameHtml}</h3>
                <p>${summaryHtml}</p>
                <div class="card-actions">
                    <a href="javascript:void(0)" class="read-more" onclick="openModal('${disease.name}')">
                        Learn More <i class="fas fa-arrow-right"></i>
                    </a>
                    <button class="card-like-btn" onclick="toggleLike('${disease.name}', this)" aria-label="Like this condition" aria-pressed="${localStorage.getItem(`liked_${disease.name}`) ? 'true' : 'false'}">
                        <svg class="heart-icon icon-circle${localStorage.getItem(`liked_${disease.name}`) ? ' liked' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0c-1.758 1.758-1.758 4.606 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364c-1.758-1.758-4.606-1.758-6.364 0L12 7.636z" transform="scale(0.6) translate(8, 8)"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fuse.js Options
const fuseOptions = {
    keys: [
        { name: 'name', weight: 1.0 },
        { name: 'symptoms', weight: 0.6 },
        { name: 'summary', weight: 0.3 },
        { name: 'category', weight: 0.1 }
    ],
    threshold: 0.3,
    includeScore: true,
    ignoreLocation: true
};

let fuse;

// Initialise Fuse after data is loaded (which is static here, so effectively immediately)
// We'll lazy load style or just init it in performSearch or DOMContentLoaded.
// Since 'diseases' is global const, we can init it.    

// Helper to scroll to results explicitly
function scrollToResults() {
    const featuredSection = document.querySelector('.featured-section');
    if (featuredSection) featuredSection.scrollIntoView({ behavior: 'smooth' });
}

// Filter Function
function performSearch(query) {
    if (!fuse) {
        fuse = new Fuse(diseases, fuseOptions);
    }

    if (!query) {
        renderCards(diseases);
        return;
    }

    const results = fuse.search(query);
    renderCards(results, query);
}

// Modal Logic
function openModal(diseaseName) {
    const disease = diseases.find(d => d.name === diseaseName);
    if (!disease) return;

    if (!modal) return;

    // Populate Modal Content
    document.getElementById('modal-title').textContent = disease.name;
    document.getElementById('modal-summary').textContent = disease.summary;
    document.getElementById('modal-description').innerHTML = disease.description;
    document.getElementById('modal-causes').innerHTML = disease.causes;
    document.getElementById('modal-treatment').innerHTML = disease.treatment;
    document.getElementById('modal-living').innerHTML = disease.living;
    document.getElementById('modal-help').innerHTML = disease.help;

    // Populate Lists helpers
    const populateList = (elementId, items) => {
        const el = document.getElementById(elementId);
        if (el) el.innerHTML = items ? items.map(item => `<li>${item}</li>`).join('') : '';
    };

    // New helper for related links (clickable)
    const populateRelated = (elementId, items) => {
        const el = document.getElementById(elementId);
        if (el) el.innerHTML = items ? items.map(item => `<li><a href="#" onclick="openModal('${item}')" style="color:var(--gasoline-green); text-decoration: underline;">${item}</a></li>`).join('') : '';
    };

    populateList('modal-symptoms', disease.symptoms);
    populateList('modal-diagnosis', disease.diagnosis);
    populateRelated('modal-related', disease.related);

    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling bg
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderCards(diseases); // Initial Load
    renderSymptomTags();

    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            performSearch(query); // Never scroll on typing

            // Sync other inputs
            searchInputs.forEach(other => {
                if (other !== input) other.value = input.value;
            });
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);

    // Close on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Category View All Logic
    const categoryCards = document.querySelectorAll('.category-card');
    const viewAllBtn = document.getElementById('view-all-cats-btn');

    // Initially hide items after 4
    categoryCards.forEach((card, index) => {
        if (index >= 4) {
            card.classList.add('category-hidden');
        }
    });

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function () {
            const isExpanded = this.getAttribute('data-expanded') === 'true';

            if (!isExpanded) {
                // Show all
                categoryCards.forEach(card => card.classList.remove('category-hidden'));
                this.textContent = 'Show Less';
                this.setAttribute('data-expanded', 'true');
            } else {
                // Hide extra
                categoryCards.forEach((card, index) => {
                    if (index >= 4) card.classList.add('category-hidden');
                });
                this.textContent = 'View all Categories';
                this.setAttribute('data-expanded', 'false');

                // Scroll back to top of section gently
                const browseSection = document.querySelector('.browse-section');
                if (browseSection) browseSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Category card click handlers
    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            const category = this.querySelector('h3').textContent;
            searchInputs.forEach(input => input.value = category);
            performSearch(category);
            scrollToResults(); // Scroll on category click
        });
    });

    // Theme Toggle Logic
    const toggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial state
    if (toggle) {
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggle.checked = true;
        }

        // Toggle event
        toggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});

// Expose openModal to global scope for the inline onclick handler
window.openModal = openModal;
window.toggleLike = toggleLike;

// Like Functionality
function toggleLike(conditionName, buttonElement) {
    const svg = buttonElement.querySelector('svg');
    const isLiked = svg.classList.contains('liked');

    if (isLiked) {
        svg.classList.remove('liked');
        buttonElement.setAttribute('aria-pressed', 'false');
        localStorage.removeItem(`liked_${conditionName}`);
    } else {
        svg.classList.add('liked');
        buttonElement.setAttribute('aria-pressed', 'true');
        localStorage.setItem(`liked_${conditionName}`, 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Sticky Header visual state
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // Scroll to Top Logic
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        let scrollTimer;
        window.addEventListener('scroll', () => {
            if (!scrollTimer) {
                scrollTimer = setTimeout(() => {
                    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
                    scrollTimer = null;
                }, 150);
            }
        }, { passive: true });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
