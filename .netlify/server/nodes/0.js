

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.eafef340.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.549c00a8.js"];
export const stylesheets = ["_app/immutable/assets/0.7f183212.css"];
export const fonts = [];
