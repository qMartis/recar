import { Request } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
export { ApolloServer } from 'apollo-server-express'
import { Container } from 'typeorm-typedi-extensions'
import config from '../config'
import authChecker from './auth'

export interface ApolloContext {
	req: Request;
}

export async function createApollo (): Promise<ApolloServer> {
	const schema = await buildSchema({
		resolvers: [__dirname + '/../graphql/**/*.resolver.{ts,js}'],
		container: Container,
		authChecker
	})

	return new ApolloServer({
		...config.apollo,
		schema,
		context: ({ req, connection }): ApolloContext => connection ? connection.context : { req }
	})
}
