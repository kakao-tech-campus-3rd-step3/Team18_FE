export const replaceRouteParams = (path: string, params: Record<string, string | number>) => {
  let replaced = path;
  Object.entries(params).forEach(([key, value]) => {
    replaced = replaced.replace(`:${key}`, String(value));
  });
  return replaced;
};
