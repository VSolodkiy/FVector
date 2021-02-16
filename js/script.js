// Скрытие кнопки меню после клика в другой области экрана id="navbarToggle" -> id="navbarSupportedContent"
$(function () { // Same as document.addEventListener("DOMContentLoaded"...

// Same as document.querySelector("#navbarToggle").addEventListener("blur",...
$("#navbarToggle").blur(function (event) {
  var screenWidth = window.innerWidth;
  if (screenWidth < 992) {
    $("#navbarSupportedContent").collapse('hide');
    }
  });
});