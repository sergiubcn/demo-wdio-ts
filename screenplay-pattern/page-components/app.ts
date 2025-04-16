export const loadPage = async (path: string = "/") => {
  await browser.url(path);
};
