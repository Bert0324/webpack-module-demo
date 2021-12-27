export default async () => {
  const module = await import('libs/lodash');
  return module.default;
};