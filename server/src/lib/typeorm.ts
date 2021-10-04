import { Connection, createConnection, useContainer } from 'typeorm'
import { Container } from 'typeorm-typedi-extensions'
import config from '../config/database'

export function createDatabaseConnection (): Promise<Connection> {
	useContainer(Container)

	return createConnection(config)
}
