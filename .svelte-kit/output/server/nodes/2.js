import * as universal from '../entries/pages/arscene/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/arscene/+layout.js";
export const imports = ["_app/immutable/nodes/2.Bfyg6KCr.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BVyUmyNK.js"];
export const stylesheets = [];
export const fonts = [];
