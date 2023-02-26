function scrollElementIntoView(element: HTMLElement) {
  // const navBarHeight = parseInt(
  //   getComputedStyle(document.body)
  //     .getPropertyValue('--vp-nav-height')
  //     .replace('px', '')
  // );

  const top = element.offsetTop;

  window.scrollTo({
    top: top,
  });
}

export { scrollElementIntoView };
