export const isDev = process.env.NODE_ENV === 'development'
export const isProd = process.env.NODE_ENV === 'production'

export default {
	env: process.env.NODE_ENV,
	isDev,
	isProd,
	http: {
		port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
		host: process.env.HOST ?? 'localhost'
	},
	apollo: {
		tracing: true,
		debug: isDev,
		introspection: true,
		playground: {
			settings: {
				'request.credentials': 'include'
			}
		}
	}
}
