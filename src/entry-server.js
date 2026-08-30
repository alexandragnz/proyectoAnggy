import { renderToString } from "vue/server-renderer";
import { renderSSRHead } from "@unhead/vue/server";
import { createApp } from "./main";

/**
 * @param {string} url
 */
export async function render(url) {
  const { app, router, head } = createApp();

  await router.push(url);
  await router.isReady();

  const ctx = {};
  const html = await renderToString(app, ctx);
  const headPayload = await renderSSRHead(head);

  return {
    html,
    head: `${headPayload.headTags}${headPayload.bodyTagsOpen}${headPayload.bodyTags}`,
  };
}
