

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b1177101.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.549c00a8.js","_app/immutable/chunks/singletons.9be05a98.js","_app/immutable/chunks/index.0378bb41.js"];
export const stylesheets = [];
export const fonts = [];
