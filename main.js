const lettersAr = "أبتثجحخدذرزسشصضطظعغفقكلمنهوي";
const lettersEn = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let currentLang = localStorage.getItem('preferredLang') || 'ar';

const translations = {
    ar: {
        dir: "rtl",
        companyName: "أعتان للمقاولات العامة",
        home: "الرئيسية",
        about: "تعريف بنا",
        projects: "مشاريعنا",
        departments: "أقسامنا",
        testimonials: "آراء عملائنا",
        evStations: "شواحن السيارات الكهربائية",
        streetLighting: "قسم إنارة الشوارع",
        maintenance: "قسم الصيانة",
        infrastructure: "البنية التحتية",
        saudiArabia: "المملكة العربية السعودية",
        viewDetails: "عرض التفاصيل",
        close: "إغلاق",
        projectDetails: "تفاصيل المشروع",
        descriptionHeader: "فخورون بتنفيذ أضخم المشاريع بأعلى معايير الجودة",
        heroSub: "نحن نبني المستقبل",
        heroTitle: "أعتان للمقاولات العامة",
        heroLead: "حلول هندسية مبتكرة في البنية التحتية، إنارة الشوارع، وشواحن السيارات الكهربائية.",
        contactUs: "تواصل معنا",
        aboutTitle: "تعريف بنا",
        aboutLead: "مؤسسة أعتان للمقاولات العامة هي شركة متخصصة في تنفيذ أعمال المقاولات العامة والأعمال الكهربائية، وتسعى إلى تقديم خدمات عالية الجودة وفق أفضل المعايير الفنية والهندسية.",
        aboutText: "نلتزم في الشركة بتقديم حلول هندسية متكاملة تلبي احتياجات عملائنا في مشاريع البنية التحتية وأعمال الكهرباء، مع التركيز على الجودة والالتزام بالمواعيد والسلامة المهنية.",
        visionTitle: "رؤيتنا",
        visionText: "أن نكون من الشركات الرائدة في المملكة من خلال الخبرة والكفاءة والجودة.",
        missionTitle: "رسالتنا",
        missionText: "تقديم خدمات متكاملة وبناء علاقات قائمة على الثقة والاحترافية.",
        servicesTitle: "خدماتنا",
        servicesSub: "نقدم حلولاً هندسية شاملة بأعلى المعايير",
        elecWorks: "الأعمال الكهربائية",
        elecDesc: "تنفيذ الأعمال الكهربائية للمشاريع وتمديد الكابلات الأرضية وصيانة الشبكات.",
        lightingTitle: "إنارة الشوارع",
        lightingDesc: "متخصصون في توريد وتركيب وصيانة أنظمة إنارة الشوارع والطرق بأحدث التقنيات.",
        contractingTitle: "المقاولات العامة",
        contractingDesc: "تنفيذ مشاريع البنية التحتية والمقاولات العامة وفق الجداول الزمنية المحددة.",
        commitmentTitle: "التزامنا",
        commitment1: "الالتزام بمعايير الجودة والسلامة",
        commitment2: "استخدام أحدث التقنيات والمعدات",
        commitment3: "تحقيق رضا العملاء التام",
        contactTitle: "تواصل معنا",
        address: "الرياض – شارع أبي بكر الصديق",
        projectsTitle: "مشاريعنا",
        projectsSub: "فخورون بتنفيذ أضخم المشاريع بأعلى معايير الجودة",
        infraTitle: "أعمال البنية التحتية المتكاملة",
        generalContracting: "أعمال المقاولات العامة",
        testiMainTitle: "قالوا عن أعتان",
        testiSub: "نعتز بثقة عملائنا ونسعى دائماً للأفضل",
        test1Text: '"الاحترافية في التنفيذ والالتزام بالمواعيد كان مبهراً. شركة أعتان شريك حقيقي في النجاح."',
        test1Name: "المهندس أحمد الرميح",
        test1Job: "مدير مشاريع - الرياض",
        test2Text: '"جودة الأعمال الكهربائية في مشاريعنا الأخيرة كانت فوق التوقعات، فريق عمل متمكن تقنياً."',
        test2Name: "أ/ خالد العتيبي",
        test2Job: "مؤسسة العتيبي للمقاولات",
        test3Text: '"التزام كامل بمعايير السلامة المهنية وسرعة في إنجاز أعمال البنية التحتية."',
        test3Name: "المهندس/ علي مصطفى",
        test3Job: "استشاري مشاريع",
        footerCompanyName: "أعتان للمقاولات العامة",
        footerDesc: "مؤسسة رائدة في المملكة العربية السعودية، متخصصون في تنفيذ مشاريع البنية التحتية، الإنارة، والأعمال الكهربائية بأعلى معايير الجودة والسلامة.",
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات التواصل",
        fullAddress: "الرياض – شارع أبي بكر الصديق – المملكة العربية السعودية",
        allRights: "© 2026 جميع الحقوق محفوظة لـ مؤسسة أعتان للمقاولات العامة",
        footerHome: "الرئيسية",
        footerAbout: "تعريف بنا",
        footerProjects: "مشاريعنا",
        footerDeps: "أقسامنا"
    },
    en: {
        dir: "ltr",
        companyName: "Atan General Contracting",
        home: "Home",
        about: "About Us",
        projects: "Our Projects",
        departments: "Departments",
        testimonials: "Testimonials",
        evStations: "EV Charging Stations",
        streetLighting: "Street Lighting Dept",
        maintenance: "Maintenance Dept",
        infrastructure: "Infrastructure",
        saudiArabia: "Saudi Arabia",
        viewDetails: "View Details",
        close: "Close",
        projectDetails: "Project Details",
        descriptionHeader: "Proud to execute the largest projects with the highest quality standards",
        heroSub: "WE BUILD THE FUTURE",
        heroTitle: "Atan General Contracting",
        heroLead: "Innovative engineering solutions in infrastructure, street lighting, and EV charging stations.",
        contactUs: "Contact Us",
        aboutTitle: "About Us",
        aboutLead: "Atan General Contracting Institution is specialized in general contracting and electrical works, striving to provide high-quality services according to the best technical and engineering standards.",
        aboutText: "We are committed to providing integrated engineering solutions that meet our clients' needs in infrastructure and electrical projects, focusing on quality, timely delivery, and occupational safety.",
        visionTitle: "Our Vision",
        visionText: "To be among the leading companies in the Kingdom through experience, efficiency, and quality.",
        missionTitle: "Our Mission",
        missionText: "Providing integrated services and building relationships based on trust and professionalism.",
        servicesTitle: "Our Services",
        servicesSub: "Comprehensive engineering solutions with the highest standards",
        elecWorks: "Electrical Works",
        elecDesc: "Executing electrical works for projects, underground cabling, and network maintenance.",
        lightingTitle: "Street Lighting",
        lightingDesc: "Specialized in supplying, installing, and maintaining street and road lighting using the latest technologies.",
        contractingTitle: "General Contracting",
        contractingDesc: "Executing infrastructure and general contracting projects according to specified schedules.",
        commitmentTitle: "Our Commitment",
        commitment1: "Adherence to quality and safety standards",
        commitment2: "Using the latest technologies and equipment",
        commitment3: "Achieving total customer satisfaction",
        contactTitle: "Contact Us",
        address: "Riyadh – Abu Bakr Al-Siddiq St.",
        projectsTitle: "Our Projects",
        projectsSub: "Proudly executing major projects with the highest quality standards",
        infraTitle: "Integrated Infrastructure Works",
        generalContracting: "General Contracting Works",
        testiMainTitle: "What They Say About Atan",
        testiSub: "We cherish our clients' trust and always strive for the best",
        test1Text: '"The professionalism in execution and commitment to deadlines was impressive. Atan is a true partner in success."',
        test1Name: "Eng. Ahmed Al-Rumaih",
        test1Job: "Project Manager - Riyadh",
        test2Text: '"The quality of electrical works in our recent projects exceeded expectations. A technically proficient team."',
        test2Name: "Mr. Khalid Al-Otaibi",
        test2Job: "Al-Otaibi Contracting Est.",
        test3Text: '"Full commitment to occupational safety standards and speed in completing infrastructure works."',
        test3Name: "Eng. Ali Mostafa",
        test3Job: "Project Consultant",
        footerCompanyName: "Atan General Contracting",
        footerDesc: "A leading institution in the Kingdom of Saudi Arabia, specialized in infrastructure, lighting, and electrical projects with the highest standards of quality and safety.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Information",
        fullAddress: "Riyadh – Abu Bakr Al-Siddiq St. – Kingdom of Saudi Arabia",
        allRights: "© 2026 All Rights Reserved to Atan General Contracting Establishment",
        footerHome: "Home",
        footerAbout: "About Us",
        footerProjects: "Our Projects",
        footerDeps: "Our Departments"
    }
};

function applyLanguage() {
    const t = translations[currentLang];
    localStorage.setItem('preferredLang', currentLang);

    document.documentElement.dir = t.dir;
    document.documentElement.lang = currentLang;

    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
    if (bootstrapLink) {
        bootstrapLink.href = currentLang === 'en' 
            ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
            : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";
    }

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (t[key]) {
            element.innerText = t[key];
            if (element.classList.contains('text-scramble')) {
                element.dataset.value = t[key];
            }
        }
    });

    const langBtn = document.getElementById('lang-switch');
    if (langBtn) langBtn.innerText = currentLang === 'ar' ? "English" : "العربية";

    renderProjects();
    startScramble();
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
}

function startScramble() {
    const target = document.querySelector(".text-scramble");
    if (!target) return;
    let iteration = 0;
    clearInterval(interval);
    const chars = currentLang === 'ar' ? lettersAr : lettersEn;

    interval = setInterval(() => {
        target.innerText = target.innerText.split("").map((letter, index) => {
            if (index < iteration) return target.dataset.value[index] || "";
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        if (iteration >= target.dataset.value.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 30);
}

const projectTitlesAr = ["بنية تحتية متكاملة", "شبكات الجهد المنخفض", "محطات شحن EV", "إنارة الطرق", "الأعمال المدنية", "الأعمال الميكانيكية", "أعمال التيار الخفيف", "عقود الصيانة"];
const projectTitlesEn = ["Infrastructure", "LV Networks", "EV Stations", "Road Lighting", "Civil Works", "Mechanical Works", "Light Current", "Maintenance"];

const projectDescAr = [
    "تنفذ شركة أعتان شبكات المياه والصرف الصحي بأحدث التقنيات.",
    "تصميم وتنفيذ شبكات الجهد المتوسط والمنخفض ببراعة.",
    "تأسيس وتوريد محطات شحن السيارات الكهربائية (SASO).",
    "تصميم وتنفيذ أنظمة إنارة ذكية وموفرة للطاقة.",
    "تنفيذ مشاريع إنشائية ضخمة تماشياً مع رؤية 2030.",
    "حلول ميكانيكية متكاملة تشمل التكييف ومكافحة الحريق.",
    "تركيب أنظمة التيار الخفيف وكاميرات المراقبة.",
    "عقود صيانة شاملة للمرافق الكهربائية والميكانيكية."
];
const projectDescEn = [
    "Implementation of water and sewage networks using latest tech.",
    "Design and implementation of MV/LV electrical networks.",
    "Establishing EV charging stations compliant with Saudi standards.",
    "Designing smart and energy-efficient lighting systems.",
    "Massive construction projects aligned with Vision 2030.",
    "Integrated mechanical solutions including HVAC and Firefighting.",
    "Installation of light current systems and CCTV.",
    "Comprehensive maintenance contracts for vital facilities."
];

function renderProjects() {
    const infraGrid = document.getElementById('infrastructure-grid');
    const contractGrid = document.getElementById('contracting-grid');
    if (!infraGrid || !contractGrid) return;
    
    infraGrid.innerHTML = ""; 
    contractGrid.innerHTML = ""; 

    const titles = currentLang === 'ar' ? projectTitlesAr : projectTitlesEn;
    const descriptions = currentLang === 'ar' ? projectDescAr : projectDescEn;
    const t = translations[currentLang];

    for (let i = 1; i <= 8; i++) {
        const title = titles[i - 1];
        const desc = descriptions[i - 1];
        const imgSrc = `./Styles/photos/${i}.jpeg`;
        
        const cardHTML = `
            <div class="col-sm-6 col-lg-4 col-xl-3 project-item" style="opacity:0; transform: translateY(20px); transition: 0.6s">
                <div class="card h-100 shadow project-card text-white rounded-4 overflow-hidden bg-secondary border-0">
                    <img src="${imgSrc}" class="card-img-top project-img" alt="${title}" style="height:200px; object-fit:cover;">
                    <div class="card-body text-center d-flex flex-column">
                        <h6 class="card-title fw-bold mb-1">${title}</h6>
                        <p class="card-text small opacity-75 mb-3">
                            <i class="bi bi-geo-alt-fill text-warning me-1"></i> ${t.saudiArabia}
                        </p>
                        <button class="btn btn-warning btn-sm w-100 fw-bold mt-auto" 
                                onclick="showProjectDetails('${title}', '${imgSrc}', '${desc.replace(/'/g, "\\'")}')">
                            ${t.viewDetails}
                        </button>
                    </div>
                </div>
            </div>`;

        if (i <= 4) infraGrid.insertAdjacentHTML('beforeend', cardHTML);
        else contractGrid.insertAdjacentHTML('beforeend', cardHTML);
    }
    observeProjects();
}

function showProjectDetails(title, img, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImg').src = img;
    document.getElementById('modalDescription').innerText = desc;
    new bootstrap.Modal(document.getElementById('projectModal')).show();
}

function observeProjects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.project-item').forEach(item => observer.observe(item));
}

window.onload = () => {
    const navContainer = document.querySelector('.navbar .container');
    if (navContainer && !document.getElementById('lang-switch')) {
        const btn = document.createElement('button');
        btn.id = 'lang-switch';
        btn.className = 'btn btn-outline-warning btn-sm fw-bold rounded-pill px-3 ms-2';
        btn.onclick = toggleLanguage;
        navContainer.appendChild(btn);
    }
    applyLanguage();
};