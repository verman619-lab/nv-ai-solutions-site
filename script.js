(function () {
  "use strict";

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  // If a picture is missing, close the space it was holding and keep the words.
  function collapse(img) {
    img.classList.add("is-missing");
    var box = img.closest("[data-media]");
    if (box) box.classList.add("is-missing");
    var row = img.closest(".row");
    if (row) row.classList.add("row--one");
  }

  Array.prototype.forEach.call(
    document.querySelectorAll("img[data-collapse]"),
    function (img) {
      if (img.complete && img.naturalWidth === 0) {
        collapse(img);
      } else {
        img.addEventListener("error", function () {
          collapse(img);
        });
      }
    }
  );
})();
