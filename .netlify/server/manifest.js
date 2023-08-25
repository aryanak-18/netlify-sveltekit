export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8db23374.js","app":"_app/immutable/entry/app.902aa155.js","imports":["_app/immutable/entry/start.8db23374.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.9be05a98.js","_app/immutable/chunks/index.0378bb41.js","_app/immutable/entry/app.902aa155.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.549c00a8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
