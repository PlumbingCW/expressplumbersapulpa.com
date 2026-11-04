(function () {
  "use strict";
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");
  function openMenu() {
    drawer.classList.add("is-open");
    overlay.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  if (toggle && drawer && overlay) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (closeBtn) { closeBtn.addEventListener("click", closeMenu); }
    overlay.addEventListener("click", closeMenu);
    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeMenu(); } });
  }
  var heads = document.querySelectorAll(".acc-head");
  for (var j = 0; j < heads.length; j++) {
    heads[j].addEventListener("click", function () {
      var item = this.closest(".acc-item");
      var open = item.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
      var plus = this.querySelector(".acc-plus");
      if (plus) { plus.textContent = open ? "−" : "+"; }
    });
  }
})();
