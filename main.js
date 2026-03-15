// 1. تعريف الحروف لتأثير الـ Scramble
const lettersAr = "أبتثجحخدذرزسشصضطظعغفقكلمنهوي";
const lettersEn = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let currentLang = 'ar'; 

// 2. قاموس الترجمة الشامل
const translations = {
    ar: {
        dir: "rtl",
        langBtn: "English",
        navHome: "الرئيسية",
        navAbout: "تعريف بنا",
        navProjects: "مشاريعنا",
        navSections: "أقسامنا",
        navTestimonials: "أراء عملائنا",
        heroSub: "نحن نبني المستقبل",
        heroTitle: "أعتان للمقاولات العامة",
        heroDesc: "حلول هندسية مبتكرة في البنية التحتية، إنارة الشوارع، وشواحن السيارات الكهربائية.",
        heroBtn: "تواصل معنا",
        heroContact: "للتواصل واتساب أو مكالمات. <br> في حال تعذر الاتصال، يرجى التواصل على: <br> <span class='fw-bold text-warning' style='font-size: 1.1rem;'>0550011567</span>",
        aboutTitle: "تعريف بنا",
        aboutP1: "مؤسسة أعتان للمقاولات العامة هي شركة متخصصة في تنفيذ أعمال المقاولات العامة والأعمال الكهربائية، وتسعى إلى تقديم خدمات عالية الجودة وفق أفضل المعايير الفنية والهندسية.",
        aboutP2: "نلتزم في الشركة بتقديم حلول هندسية متكاملة تلبي احتياجات عملائنا في مشاريع البنية التحتية وأعمال الكهرباء، مع التركيز على الجودة والالتزام بالمواعيد والسلامة المهنية.",
        visionTitle: "رؤيتنا",
        missionTitle: "رسالتنا",
        servicesTitle: "خدماتنا",
        serv1T: "الأعمال الكهربائية",
        serv2T: "إنارة الشوارع",
        serv3T: "المقاولات العامة",
        commitTitle: "التزامنا",
        contactTitle: "تواصل معنا",
        projectsTitle: "مشاريعنا",
        projectsSub: "فخورون بتنفيذ أضخم المشاريع بأعلى معايير الجودة",
        infraTitle: "أعمال البنية التحتية المتكاملة",
        contractTitle: "أعمال المقاولات العامة",
        viewDetails: "عرض التفاصيل",
        saudiArabia: "المملكة العربية السعودية",
        testiTitle: "قالوا عن أعتان",
        footerDesc: "مؤسسة رائدة في المملكة العربية السعودية، متخصصون في تنفيذ مشاريع البنية التحتية، الإنارة، والأعمال الكهربائية بأعلى معايير الجودة والسلامة.",
        footerLinks: "روابط سريعة",
        modalTitle: "تفاصيل المشروع",
        modalClose: "إغلاق"
    },
    en: {
        dir: "ltr",
        langBtn: "العربية",
        navHome: "Home",
        navAbout: "About Us",
        navProjects: "Projects",
        navSections: "Sections",
        navTestimonials: "Testimonials",
        heroSub: "WE BUILD THE FUTURE",
        heroTitle: "AATAN CONTRACTING",
        heroDesc: "Innovative engineering solutions in infrastructure, street lighting, and EV charging stations.",
        heroBtn: "Contact Us",
        heroContact: "Contact via WhatsApp or Calls. <br> If unreachable, please contact: <br> <span class='fw-bold text-warning' style='font-size: 1.1rem;'>0550011567</span>",
        aboutTitle: "About Us",
        aboutP1: "Aatan General Contracting Establishment is a specialized company in general contracting and electrical works, striving to provide high-quality services.",
        aboutP2: "We are committed to providing integrated engineering solutions that meet our clients' needs in infrastructure and electrical projects.",
        visionTitle: "Our Vision",
        missionTitle: "Our Mission",
        servicesTitle: "Our Services",
        serv1T: "Electrical Works",
        serv2T: "Street Lighting",
        serv3T: "General Contracting",
        commitTitle: "Our Commitment",
        contactTitle: "Contact Us",
        projectsTitle: "Our Projects",
        projectsSub: "Proudly executing major projects with the highest quality standards",
        infraTitle: "Integrated Infrastructure Works",
        contractTitle: "General Contracting Works",
        viewDetails: "View Details",
        saudiArabia: "Saudi Arabia",
        testiTitle: "Testimonials",
        footerDesc: "A leading establishment in KSA, specialized in infrastructure, lighting, and electrical projects.",
        footerLinks: "Quick Links",
        modalTitle: "Project Details",
        modalClose: "Close"
    }
};

// 3. دالة تبديل اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const t = translations[currentLang];

    document.documentElement.dir = t.dir;
    document.documentElement.lang = currentLang;

    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
    if (currentLang === 'en') {
        bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    } else {
        bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks[0].innerText = t.navHome;
    navLinks[1].innerText = t.navAbout;
    navLinks[2].innerText = t.navProjects;
    if (document.getElementById('navbarDropdown')) {
        document.getElementById('navbarDropdown').childNodes[0].textContent = t.navSections + " ";
    }
    navLinks[4].innerText = t.navTestimonials;
    
    const navText = document.querySelector('.navbar-text');
    if (navText) navText.innerText = (currentLang === 'ar' ? "أعتان للمقاولات العامة" : "Aatan General Contracting");

    document.querySelector('.hero-section h6').innerText = t.heroSub;
    const scrambleEl = document.querySelector('.text-scramble');
    if (scrambleEl) scrambleEl.dataset.value = t.heroTitle;
    document.querySelector('.hero-section p').innerText = t.heroDesc;
    document.querySelector('.custom-btn-outline').innerText = t.heroBtn;
    document.querySelector('.hero-section .text-light.small').innerHTML = t.heroContact;

    document.querySelector('#about h2').innerText = t.aboutTitle;
    document.querySelectorAll('#about .lead')[0].innerText = t.aboutP1;
    document.querySelectorAll('#about .text-muted')[0].innerText = t.aboutP2;
    document.querySelector('#about .bg-dark h4').innerText = t.visionTitle;
    document.querySelector('#about .bg-warning h4').innerText = t.missionTitle;
    document.querySelector('#about .text-center h2').innerText = t.servicesTitle;
    
    const serviceTitles = document.querySelectorAll('.service-card h5');
    if (serviceTitles.length >= 3) {
        serviceTitles[0].innerText = t.serv1T;
        serviceTitles[1].innerText = t.serv2T;
        serviceTitles[2].innerText = t.serv3T;
    }

    document.querySelector('#projects h2').innerText = t.projectsTitle;
    document.querySelector('#projects p').innerText = t.projectsSub;
    
    // تحديث عناوين الأقسام الفرعية الجديدة
    const infraTitle = document.querySelector('#projects h3:nth-of-type(1)');
    const contractTitle = document.querySelector('#projects h3:nth-of-type(2)');
    if (infraTitle) infraTitle.innerText = t.infraTitle;
    if (contractTitle) contractTitle.innerText = t.contractTitle;

    document.querySelector('footer h5').innerText = (currentLang === 'ar' ? "أعتان للمقاولات العامة" : "Aatan General Contracting");
    document.querySelector('footer p.small').innerText = t.footerDesc;
    document.querySelectorAll('footer h5')[1].innerText = t.footerLinks;
    
    const copyright = document.querySelector('footer .text-center p');
    if (copyright) {
        copyright.innerHTML = (currentLang === 'ar' ? "&copy; 2026 جميع الحقوق محفوظة لـ مؤسسة أعتان للمقاولات العامة" : "&copy; 2026 All Rights Reserved - Aatan General Contracting");
    }

    document.getElementById('projectModalLabel').innerText = t.modalTitle;
    const modalBtn = document.querySelector('.modal-footer button');
    if (modalBtn) modalBtn.innerText = t.modalClose;

    document.getElementById('lang-switch').innerText = t.langBtn;

    renderProjects();
    startScramble();
}

// 4. تأثير الـ Scramble
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

// 5. رسم وتوزيع المشاريع
const projectTitlesAr = ["بنية تحتية متكاملة","تنفيذ شبكات الجهد المتوسط والمنخفض","محطات شحن السيارات الكهربائية","تصميم وتنفيذ إنارة الطرق","الأعمال المدنية (Vision 2030)","الأعمال الميكانيكية", "أعمال التيار الخفيف", "عقود الصيانة  "];
const projectTitlesEn = ["Infrastructure Works", "Low Voltage Networks","General Contracting","Road Lighting Design", "Civil Works (Vision 2030)", "Mechanical Works", "Low-voltage works","Maintenance contracts"];

function renderProjects() {
    const infraGrid = document.getElementById('infrastructure-grid');
    const contractGrid = document.getElementById('contracting-grid');
    
    if (!infraGrid || !contractGrid) return;
    
    infraGrid.innerHTML = ""; 
    contractGrid.innerHTML = ""; 

    const titles = currentLang === 'ar' ? projectTitlesAr : projectTitlesEn;
    const t = translations[currentLang];

    for (let i = 1; i <= 8; i++) {
        const title = titles[i - 1];
        const imgSrc = `./Styles/photos/${i}.jpeg`;
        
        const cardHTML = `
            <div class="col-sm-6 col-lg-4 col-xl-3 project-item" style="opacity:0; transform: translateY(20px); transition: 0.6s">
                <div class="card h-100 shadow project-card text-white rounded-4 overflow-hidden bg-secondary border-0">
                    <img src="${imgSrc}" class="card-img-top project-img" alt="${title}">
                    <div class="card-body text-center">
                        <h6 class="card-title fw-bold mb-1">${title}</h6>
                        <p class="card-text small opacity-75 mb-3"><i class="bi bi-geo-alt-fill text-warning me-1"></i> ${t.saudiArabia}</p>
                        <button class="btn btn-warning btn-sm w-100 fw-bold" onclick="showProjectDetails('${title}', '${imgSrc}')">${t.viewDetails}</button>
                    </div>
                </div>
            </div>`;

        if (i <= 4) {
            infraGrid.insertAdjacentHTML('beforeend', cardHTML);
        } else {
            contractGrid.insertAdjacentHTML('beforeend', cardHTML);
        }
    }
    observeProjects();
}

function showProjectDetails(title, img) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImg').src = img;
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

// 6. تشغيل عند التحميل
window.onload = () => {
    const navContainer = document.querySelector('.navbar .container');
    if (navContainer && !document.getElementById('lang-switch')) {
        const btn = document.createElement('button');
        btn.id = 'lang-switch';
        btn.className = 'btn btn-outline-warning btn-sm fw-bold rounded-pill px-3 ms-2';
        btn.innerText = currentLang === 'ar' ? "English" : "العربية";
        btn.onclick = toggleLanguage;
        navContainer.appendChild(btn);
    }
    renderProjects();
    startScramble();
};