import { isDev } from './config'

import http from 'http'
import { createExpress, Express } from './lib/express'
import { createApollo, ApolloServer } from './lib/apollo'
import { createDatabaseConnection } from './lib/typeorm'

export interface AppContext {
	app: Express;
	server: http.Server;
	apollo?: ApolloServer;
	boot(port: number, host: string): http.Server;
	terminate: (signal: string) => void;
}

export async function createApp (): Promise<AppContext> {
	await createDatabaseConnection()

	const apollo = await createApollo()
	const app = await createExpress()
	const server = http.createServer(app)

	apollo.applyMiddleware({ app })

	const boot = (port: number, host: string): http.Server => server.listen(port, host, () => {
		const endpoint = `${host}:${port}`
		console.info(`📚 Task description at: http://${endpoint}`)
		console.info(`🚀 GraphQL ready at: http://${endpoint + apollo.graphqlPath}`)
	})

	const terminate = (signal: string) => {
		console.info(signal)
		if (!isDev) {
			server.close(() => process.exit(0))
		} else {
			process.exit(0)
		}
	}

	return {
		app,
		apollo,
		server,
		boot,
		terminate
	}
}
