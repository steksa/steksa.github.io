// -------------------------------------------
// 1.0 Template Features Coden
// 5.0 Preloader Activation
// ------------------------------------------

// ------------------------------------
// Chapter 1.0: Template Features Code
// ------------------------------------

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // 1.2 => Password Visibility

  let passWord = document.getElementById("password-visibility");

  if (passWord) {
    passWord.addEventListener("click", function () {
      let passInput = document.getElementById("psw-input");
      if (passInput) {
        passWord.classList.toggle("active");
        passInput.type = passInput.type === "password" ? "text" : "password";
      }
    });
  }

  // 1.1 => Setting Button Trigger

  let settingButton = document.getElementById("settingTriggerBtn");
  let settingCard = document.getElementById("settingCard");
  let settingOverlay = document.getElementById("setting-popup-overlay");
  let settingCardClose = document.getElementById("settingCardClose");

  function toggleSettings() {
    settingCard.classList.toggle("active");
    settingOverlay.classList.toggle("active");
  }

  function closeSettings() {
    settingCard.classList.remove("active");
    settingOverlay.classList.remove("active");
  }

  if (settingButton) {
    settingButton.addEventListener("click", toggleSettings);
  }

  if (settingCardClose) {
    settingCardClose.addEventListener("click", closeSettings);
  }

  // ======================
  // Chapter 5.0 Preloader
  // ======================

  let preloader = document.getElementById("preloader");

  if (preloader) {
    window.addEventListener("load", function () {
      let fadeOut = setInterval(function () {
        if (!preloader.style.opacity) {
          preloader.style.opacity = 1;
        }
        if (preloader.style.opacity > 0) {
          preloader.style.opacity -= 0.1;
        } else {
          clearInterval(fadeOut);
          preloader.remove();
        }
      }, 20);
    });
  }
});
