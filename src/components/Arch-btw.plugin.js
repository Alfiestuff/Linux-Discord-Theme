/**
 * @name ArchBtwHighlighter
 * @version 1.0.0
 * @description Highlights "Arch Btw" in blue
 */

module.exports = class ArchBtwHighlighter {
  start() {
    this.observer = new MutationObserver(() => this.highlight());
    this.observer.observe(document.body, { childList: true, subtree: true });
    this.highlight();
  }

  stop() {
    this.observer.disconnect();
  }

  highlight() {
    document.querySelectorAll(".messageContent-2t3eCI").forEach(el => {
      if (el.dataset.archDone) return;

      if (el.innerHTML.includes("Arch Btw")) {
        el.innerHTML = el.innerHTML.replace(
          /Arch Btw/g,
          `<span style="color:#4da3ff;font-weight:600;text-shadow:0 0 6px rgba(77,163,255,0.35)">Arch Btw</span>`
        );
      }

      el.dataset.archDone = "true";
    });
  }
};
