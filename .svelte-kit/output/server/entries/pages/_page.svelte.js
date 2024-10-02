import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="bg-customBackground2 "><div class="flex flex-col items-center justify-center pt-20"><div class="h-64 w-64 overflow-hidden" data-svelte-h="svelte-1svmhdn"><img src="/leafora.png" alt="leaforapng" class="h-full w-full object-cover"></div> <h1 class="text-3xl text-leaforaMainText" data-svelte-h="svelte-ck0yql">Leafora Studios</h1>  <div class="mt-20">${` <button class="px-6 py-3 bg-leaforaMainBtn text-leaforaTextBright text-xl rounded-lg" data-svelte-h="svelte-14mg1qg">Start Demo</button>`}</div></div></body>`;
});
export {
  Page as default
};
