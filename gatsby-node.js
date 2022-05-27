exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // Only update the `/admin` page.
  if (page.path.match(/^\/en/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/en/*";
    // Update the page.
    createPage(page);
  } else if (page.path.match(/^\/es/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/es/*";
    // Update the page.
    createPage(page);
  } else if (page.path.match(/^\/fr/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/fr/*";
    // Update the page.
    createPage(page);
  } else if (page.path.match(/^\/ge/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/ge/*";
    // Update the page.
    createPage(page);
  } else if (page.path.match(/^\/pt/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/pt/*";
    // Update the page.
    createPage(page);
  }
};