'use strict'; // element toggle function

var elementToggleFunc = function elementToggleFunc(elem) {
  elem.classList.toggle("active");
}; // sidebar variables


var sidebar = document.querySelector("[data-sidebar]");
var sidebarBtn = document.querySelector("[data-sidebar-btn]"); // sidebar toggle functionality for mobile

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
}); // testimonials variables

var testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
var modalContainer = document.querySelector("[data-modal-container]");
var modalCloseBtn = document.querySelector("[data-modal-close-btn]");
var overlay = document.querySelector("[data-overlay]"); // modal variable

var modalImg = document.querySelector("[data-modal-img]");
var modalTitle = document.querySelector("[data-modal-title]");
var modalText = document.querySelector("[data-modal-text]"); // modal toggle function

var testimonialsModalFunc = function testimonialsModalFunc() {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}; // add click event to all modal items


for (var i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
} // add click event to modal close button


modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc); // custom select variables

var select = document.querySelector("[data-select]");
var selectItems = document.querySelectorAll("[data-select-item]");
var selectValue = document.querySelector("[data-selecct-value]");
var filterBtn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () {
  elementToggleFunc(this);
}); // add event in all select items

for (var _i = 0; _i < selectItems.length; _i++) {
  selectItems[_i].addEventListener("click", function () {
    var selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
} // filter variables


var filterItems = document.querySelectorAll("[data-filter-item]");

var filterFunc = function filterFunc(selectedValue) {
  for (var _i2 = 0; _i2 < filterItems.length; _i2++) {
    if (selectedValue === "all") {
      filterItems[_i2].classList.add("active");
    } else if (selectedValue === filterItems[_i2].dataset.category) {
      filterItems[_i2].classList.add("active");
    } else {
      filterItems[_i2].classList.remove("active");
    }
  }
}; // add event in all filter button items for large screen


var lastClickedBtn = filterBtn[0];

for (var _i3 = 0; _i3 < filterBtn.length; _i3++) {
  filterBtn[_i3].addEventListener("click", function () {
    var selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
} // contact form variables


var form = document.querySelector("[data-form]");
var formInputs = document.querySelectorAll("[data-form-input]");
var formBtn = document.querySelector("[data-form-btn]"); // add event to all form input field

var _loop = function _loop(_i4) {
  formInputs[_i4].addEventListener("input", function () {
    console.log(formInputs[_i4].value); // check form validation

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
};

for (var _i4 = 0; _i4 < formInputs.length; _i4++) {
  _loop(_i4);
} // page navigation variables


var navigationLinks = document.querySelectorAll("[data-nav-link]");
var pages = document.querySelectorAll("[data-page]"); // add event to all nav link

for (var _i5 = 0; _i5 < navigationLinks.length; _i5++) {
  navigationLinks[_i5].addEventListener("click", function () {
    for (var _i6 = 0; _i6 < pages.length; _i6++) {
      if (this.innerHTML.toLowerCase() === pages[_i6].dataset.page) {
        pages[_i6].classList.add("active");

        navigationLinks[_i6].classList.add("active");

        window.scrollTo(0, 0);
      } else {
        pages[_i6].classList.remove("active");

        navigationLinks[_i6].classList.remove("active");
      }
    }
  });
}
//# sourceMappingURL=script.dev.js.map
