// loaders/fetchExternal.ts
export async function fetchExternalData() {
  const res = await fetch("https://asdsad.ssrf.cvssadvisor.com");

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
