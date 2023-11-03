
const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


function closeForm() {
  var formPopupBg = document.querySelector('.form-popup-bg');
  formPopupBg.classList.remove('is-visible');
}

document.addEventListener('DOMContentLoaded', function () {
  // Contact Form Interactions
  var btnOpenForm = document.getElementsByClassName('btnOpenForm');
  var formPopupBg = document.querySelector('.form-popup-bg');
  var btnCloseForm = document.getElementById('btnCloseForm');

  for (var i = 0; i < btnOpenForm.length; i++) {
    btnOpenForm[i].addEventListener('click', function (event) {
      event.preventDefault();
      formPopupBg.classList.add('is-visible');
    });
  }

  // Close popup when clicking the background or close button
  formPopupBg.addEventListener('click', function (event) {
    if (event.target === formPopupBg || event.target === btnCloseForm) {
      event.preventDefault();
      formPopupBg.classList.remove('is-visible');
    }
  });
});







const formContainer = document.getElementById('formContainer');
const overlay = document.getElementById('overlay');
const showFormButton = document.getElementById('showFormButton');

showFormButton.addEventListener('click', function () {
    formContainer.style.display = 'block';
    overlay.style.display = 'block';
    document.body.classList.add('blurry');
});

overlay.addEventListener('click', function () {
    formContainer.style.display = 'none';
    overlay.style.display = 'none';
    document.body.classList.remove('blurry');
});










