"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
  updateElWithHostname('#hostname');
  addThirdPartyFormFeature({ form: '#thirdparty-form', iframe: '#thirdparty-iframe' });
});


function updateElWithHostname(selector) {
  updateDomElementText(document.querySelector(selector), document.location.hostname);
}

// TODO: add as query param or fragment
// TODO: add on load handling
function addThirdPartyFormFeature(selectors) {
  const form = document.querySelector(selectors.form);
  const thirdpartyIframe = document.querySelector(selectors.iframe);
  form.addEventListener('submit', function (e) {
    // e.preventDefault();
    // const url = `${new FormData(form).get('thirdparty-domain')}/thirdparty/`;
    // console.log(`about to set thirdparty iframe src to "${url}"`)
    // thirdpartyIframe.src = url;
  });
}

function updateDomElementText(element, text) {
  element.innerHTML = text;
  element.classList.add('updated');
  setTimeout(function () { element.classList.remove('updated'); }, 200);
}
