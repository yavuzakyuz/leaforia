

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/arscene/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CmV7BVuT.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BVyUmyNK.js","_app/immutable/chunks/paths.BKBIF65B.js"];
export const stylesheets = [];
export const fonts = [];
