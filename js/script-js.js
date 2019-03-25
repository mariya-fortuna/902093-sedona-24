var link = document.querySelector(".hotel-link");

var popup=document.querySelector(".modal-search");
var login = popup.querySelector("[name=datein]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    login.focus();
  });
