// Digital Divide Records — About page: cycling greeting emoji
(function () {
  "use strict";
  var EMOJIS = ["👋", "👍", "👊", "🫡"];
  var el = document.getElementById("greetingEmoji");
  if (!el) return;
  setInterval(function () {
    var next = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    el.textContent = next;
    // re-trigger the pop-in animation
    el.classList.remove("emoji-pop");
    void el.offsetWidth;
    el.classList.add("emoji-pop");
  }, 4000);
})();

