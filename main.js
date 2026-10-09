// Digital Divide Records — shared page behaviour (all pages)
document.addEventListener("DOMContentLoaded", function () {
  // Copyright year
  document.querySelectorAll(".copyright-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Footer logo — smooth scroll back to top
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll-reveal animations (equivalent of the framer-motion whileInView)
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.01 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }
});