// nav button animation
function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu-button");
  mobileMenu.classList.toggle("active");

  const mobileMenuBody = document.querySelector(".mobile-menu-body");
  mobileMenuBody.classList.toggle("open");
}

const mobileMenu = document.querySelector(".mobile-menu-button");
mobileMenu.addEventListener("click", toggleMenu);

// how it works

const listItems = document.querySelectorAll(".how-it-works");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((el) => {
      el.classList.remove("list-active");
    });

    item.classList.add("list-active");
    const img = item.getAttribute("data-image");
    document.getElementById("how-it-works-image").setAttribute("src", img);
  });
});

// testimonial slider

const slidesContainer = document.querySelector(".testimonial-slider");
const slides = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const totalSlides = slides.length;

let currentIndex = 0;

let slideWidth =
  slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);

function updateSliderPosition() {
  slidesContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
  slidesContainer.style.transition = "transform 0.5s ease-in-out";
}

function recalculateSlideWidth() {
  slideWidth =
    slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
  slidesContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}

window.addEventListener("resize", () => {
  recalculateSlideWidth();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    slidesContainer.style.transition = "none";
    currentIndex = 0;
    updateSliderPosition();

    setTimeout(() => {
      slidesContainer.style.transition = "transform 0.5s ease-in-out";
      updateSliderPosition();
    }, 50);
  } else {
    updateSliderPosition();
  }
});

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    slidesContainer.style.transition = "none";
    currentIndex = totalSlides - 1;
    updateSliderPosition();
  } else {
    updateSliderPosition();
  }
});

// faq

const faqOpens = document.querySelectorAll('.faq-open');
const faqCloses = document.querySelectorAll('.faq-close');

faqOpens.forEach(faqOpen => {

  const faqBlock = faqOpen.closest('.faq-block');


  const faqQuestion = faqBlock.querySelector('.faq-question');
  const faqAnswer = faqBlock.querySelector('.faq-answer');


  faqOpen.addEventListener('click', function(){
    faqOpen.classList.toggle('hide');
    faqOpen.nextElementSibling.classList.remove('hide');
    faqAnswer.classList.toggle('hide');
    faqAnswer.classList.remove('faq-answer');
    faqAnswer.classList.add('faq-answer-open');
    faqQuestion.classList.toggle('hide');
    faqQuestion.classList.remove('faq-question');
    faqQuestion.classList.add('faq-question-open')

  })

})


faqCloses.forEach(faqClose => {

  const faqBlock = faqClose.closest('.faq-block');


  const faqQuestion = faqBlock.querySelector('.faq-question');
  const faqAnswer = faqBlock.querySelector('.faq-answer');


  faqClose.addEventListener('click', function(){
    faqClose.classList.toggle('hide');
    faqClose.previousElementSibling.classList.remove('hide');
    faqAnswer.classList.toggle('hide');
    faqAnswer.classList.add('faq-answer');
    faqAnswer.classList.remove('faq-answer-open');
    faqQuestion.classList.toggle('hide');
    faqQuestion.classList.add('faq-question');
    faqQuestion.classList.remove('faq-question-open')
  
  })
  

})






