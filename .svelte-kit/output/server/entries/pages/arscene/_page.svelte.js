import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  return `<body style="margin: 0; overflow: hidden;" data-svelte-h="svelte-en4x6x"><a-scene embedded arjs="sourceType: webcam;"> <a-marker preset="hiro"> <a-image src="/leafora.png" scale="1 1 1" position="0 0 0"></a-image></a-marker> <a-entity camera></a-entity></a-scene></body>`;
});
export {
  Page as default
};
