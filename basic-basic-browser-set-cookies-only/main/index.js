"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  updateElWithHostname("#hostname");
});


function updateElWithHostname(selector) {
  updateDomElementText(document.querySelector(selector), document.location.hostname);
}

function updateDomElementText(element, text) {
  element.innerHTML = text;
  element.classList.add('updated');
  setTimeout(function () { element.classList.remove('updated'); }, 200);
}
