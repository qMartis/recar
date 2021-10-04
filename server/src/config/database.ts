import { ConnectionOptions } from 'typeorm'

const options: ConnectionOptions = {
	type: 'sqlite',
	database: __dirname + '/../../app.sqlite',

	logging: false,
	synchronize: true,
	migrationsRun: false,

	migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
	subscribers: [__dirname + '/../database/subscribers/*{.ts,.js}'],
	entities: [__dirname + '/../entities/*{.ts,.js}'],

	cli: {
		migrationsDir: 'src/database/migrations',
		subscribersDir: 'src/database/subscribers',
		entitiesDir: 'src/entities'
	}
}

export default options
