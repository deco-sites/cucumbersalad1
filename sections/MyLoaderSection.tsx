// sections/MyLoaderSection.tsx
import { fetchExternalData } from "../loaders/fetchExternal.ts";

export default async function MyLoaderSection() {
  const data = await fetchExternalData();

  return (
    <div>
      <h2>External Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
