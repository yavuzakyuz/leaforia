

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Cfm6GWZP.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BVyUmyNK.js","_app/immutable/chunks/entry.COCjkZag.js"];
export const stylesheets = [];
export const fonts = [];
