export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "leaforia/_app",
	assets: new Set(["favicon.png","leafora.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BhowDOpY.js","app":"_app/immutable/entry/app.DN5TIH3p.js","imports":["_app/immutable/entry/start.BhowDOpY.js","_app/immutable/chunks/entry.DPDjInXC.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DN5TIH3p.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.q1xvwFjU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/arscene",
				pattern: /^\/arscene\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
