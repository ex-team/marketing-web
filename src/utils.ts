export function normalizeUrl(url: string) {
  return url.replace(/\\/g, '/').replace(/\/\//g, '/');
}

export function absoluteUrl(url: string) {
  return normalizeUrl(process.env.REACT_APP_URL + url);
}
