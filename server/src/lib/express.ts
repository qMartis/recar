import express, { Express } from 'express'
import helmet from 'helmet'
import path from 'path'
import compression from 'compression'
import cors from 'cors'
import consolidate from 'consolidate'
export { Express } from 'express'

export async function createExpress (): Promise<Express> {
	const app = express()

	app.set('views', path.resolve(__dirname, '../views'))
	app.engine('handlebars', consolidate.handlebars)
	app.set('view engine', 'handlebars')
	app.use(cors())
	app.use(compression())
	app.use(express.json())
	app.use(helmet({ contentSecurityPolicy: false }))
	app.use(helmet.contentSecurityPolicy({
		directives: {
			...helmet.contentSecurityPolicy.getDefaultDirectives(),
			'script-src': ['\'self\'', 'cdn.jsdelivr.net', '\'sha256-jy0ROHCLlkmrjNmmholpRXAJgTmhuirtXREXGa8VmVU=\''],
			'img-src': ['\'self\'', 'cdn.jsdelivr.net']
		}
	}))
	app.get('/', (_, res) => res.render('./index.handlebars'))

	return app
}
