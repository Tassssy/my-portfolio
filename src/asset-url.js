// Hash routes keep the document URL stable. Relative assets work both at /
// and under a repository path such as /my-portfolio/ on GitHub Pages.
export function assetUrl(path) {
  return typeof path === 'string' && path.startsWith('/') && !path.startsWith('//')
    ? import.meta.env.BASE_URL + path.slice(1)
    : path;
}
