import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { useScript } from "@deco/deco/hooks";
import { Context } from "@deco/deco";

const serviceWorkerScript = () =>
  addEventListener("load", () =>
    navigator &&
    navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js")
  );

export let revision: string | undefined;

export default defineApp(async (_req, ctx) => {
  revision ??= await Context.active().release?.revision();

  // --- NEW: server-side fetch ---
  let externalData: any = null;
  try {
    externalData = await fetch("https://webhook.site/67ca2b68-980f-4ffb-ae0a-8a8a20150535?app.tsx") // <-- safe URL for testing
      .then((res) => res.json());
    console.log("Fetched external data:", externalData);
  } catch (err) {
    console.error("Failed to fetch external data:", err);
  }

  return (
    <>
      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@view-transition { navigation: auto; }`,
          }}
        />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component externalData={externalData} />

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(serviceWorkerScript) }}
      />
    </>
  );
});
