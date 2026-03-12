const letters = "أبتثجحخدذرزسشصضطظعغفقكلمنهوي";
let interval = null;

function startScramble() {
  const target = document.querySelector(".text-scramble");
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return target.dataset.value[index];
        }
        // بيختار حرف عشوائي من الحروف العربية اللي حددناها
        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("");
    
    if(iteration >= target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

window.onload = () => {
    startScramble();
    createParticles();
};
// section Threee/////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById('projects-grid');
    
    // عناوين المشاريع (8 عناوين فقط)
    const projectTitles = [
        "إنارة طرق الرياض", 
        "صيانة شبكات الجهد",
        "بنية تحتية متكاملة", 
        "تطوير إنارة الميناء",
        "محطة تحويل رئيسية", 
        "صيانة إنارة المطار", 
        "مشروع الجهد المنخفض",
        "إنارة الحدائق العامة"
    ];

    // توليد 8 كاردات آلياً
    for (let i = 1; i <= 8; i++) {
        const cardHtml = `
            <div class="col-sm-6 col-lg-4 col-xl-3 project-item">
                <div class="card h-100 shadow project-card text-white rounded-4 overflow-hidden">
                    <img src="./Styles/photos/${i}.jpeg" class="card-img-top project-img" alt="مشروع إعتان">
                    <div class="card-body text-center">
                        <h6 class="card-title fw-bold mb-1">${projectTitles[i-1]}</h6>
                        <p class="card-text small opacity-75 mb-3">
                            <i class="bi bi-geo-alt-fill text-warning me-1"></i> المملكة العربية السعودية
                        </p>
                        <button class="btn btn-warning btn-sm w-100 fw-bold">عرض التفاصيل</button>
                    </div>
                </div>
            </div>`;
        grid.insertAdjacentHTML('beforeend', cardHtml);
    }

    // أنيميشن الظهور عند السكرول
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, (index % 4) * 100); 
            }
        });
    }, { threshold: 0.1 });

    // تفعيل المراقب على الكاردات بعد توليدها
    document.querySelectorAll('.project-item').forEach(item => {
        observer.observe(item);
    });
});
// section Four /////////////////////////////////////////////////////////////////////////////////////////////
const testimonialCarousel = document.querySelector('#testimonialSlider');
const carousel = new bootstrap.Carousel(testimonialCarousel, {
    interval: 5000, pause: 'hover'  
});

// أنيميشن عند تغيير السلايد (Fade Effect)
testimonialCarousel.addEventListener('slide.bs.carousel', function () {
    const activeItem = document.querySelector('.carousel-item.active .testimonial-card');
    activeItem.style.opacity = '0';
    activeItem.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        activeItem.style.opacity = '1';
        activeItem.style.transform = 'translateY(0)';
    }, 600);
});