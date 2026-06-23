/**
 * Gets the path to root from a given slug.
 * For example, "a/b/c" becomes "../.."
 */
export function pathToRoot(slug: string): string {
  let rootPath = slug
    .split("/")
    .filter((x) => x !== "")
    .slice(0, -1)
    .map((_) => "..")
    .join("/");

  if (rootPath.length === 0) {
    rootPath = ".";
  }

  return rootPath;
}
