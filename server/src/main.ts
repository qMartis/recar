import 'reflect-metadata'
import config from './config'
import { createApp } from './app'

(async (): Promise<void> => {
	try {
		const { http: { host, port } } = config
		const { boot, terminate } = await createApp()

		boot(port, host)

		process.on('SIGINT', () => terminate('SIGINT'))
		process.on('SIGTERM', () => terminate('SIGTERM'))
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
})()
