// loaders/fetchExternal.ts
export async function fetchExternalData() {
  const res = await fetch("https://webhook.site/67ca2b68-980f-4ffb-ae0a-8a8a20150535");

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
