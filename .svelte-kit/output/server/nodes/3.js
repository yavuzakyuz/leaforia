

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/arscene/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BCuMa6iD.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.q1xvwFjU.js"];
export const stylesheets = [];
export const fonts = [];
