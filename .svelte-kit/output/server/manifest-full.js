export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","leafora.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C3CamoKx.js","app":"_app/immutable/entry/app.F74ZW3r3.js","imports":["_app/immutable/entry/start.C3CamoKx.js","_app/immutable/chunks/entry.COCjkZag.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.F74ZW3r3.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.BVyUmyNK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/arscene",
				pattern: /^\/arscene\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
