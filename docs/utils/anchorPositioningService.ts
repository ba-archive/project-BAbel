function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function scrollElementIntoView(element: HTMLElement) {
  setTimeout(() => {
    if (!isInViewport(element)) {
      const top = element.offsetTop;

      window.scrollTo({
        top: top,
      });
    }
  }, 500);
}

export { scrollElementIntoView, isInViewport };
