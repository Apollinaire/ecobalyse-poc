export function get<TResponse extends any>(
  endpoint: string,
): () => Promise<TResponse> {
  return () => fetch('/api/fwd' + endpoint).then((res) => res.json());
}
