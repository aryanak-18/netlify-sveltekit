

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6d721aae.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.549c00a8.js","_app/immutable/chunks/index.0378bb41.js"];
export const stylesheets = [];
export const fonts = [];
