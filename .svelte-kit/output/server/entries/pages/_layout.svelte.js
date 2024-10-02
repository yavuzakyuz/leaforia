import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  const csr = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0) $$bindings.prerender(prerender);
  if ($$props.csr === void 0 && $$bindings.csr && csr !== void 0) $$bindings.csr(csr);
  return `<div class="bg-customBackground2">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
