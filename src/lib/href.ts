export function isInternalRoute(href: string): boolean {
  if (!href.startsWith("/")) {
    return false;
  }

  const [pathname] = href.split(/[?#]/);

  return !/\.[^/]+$/.test(pathname);
}
