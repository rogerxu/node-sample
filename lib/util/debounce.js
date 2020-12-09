function debounce(func, wait = 0, { leading = false, trailing = true }) {
  let timeout;

  return (...args) => {
    let context = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

export { debounce };
