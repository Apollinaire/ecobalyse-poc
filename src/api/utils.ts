export const get = (endpoint: string) => {
  return () => fetch('/api' + endpoint).then((res) => res.json());
};
