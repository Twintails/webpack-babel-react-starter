export const styleLog = (background, foreground = "white") => {
  return `background: ${background}; color: ${foreground}; padding: 8px; border-radius: 8px;`
}

export const waitASecond = val => new Promise((resolve) => {
    const wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(val);
    }, 1000);
});
