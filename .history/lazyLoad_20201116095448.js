window.addEventListener("DOMContentLoaded", () => {
  const options = {};

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const lazyImage = entry.target;
      console.log(lazyImage.classList);
      if (entry.isIntersecting && !lazyImage.classList.contains("loaded")) {
        lazyImage.classList.add("loaded");
        lazyImage.src = lazyImage.dataset.src;
        delete lazyImage.dataset.src;
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll("img[data-src]");
  for (const target of targets) {
    observer.observe(target);
  }
});
