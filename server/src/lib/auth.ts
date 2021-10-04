import { AuthChecker } from 'type-graphql'
import { ApolloContext } from './apollo'

const authChecker: AuthChecker<ApolloContext> = ({ context }) => {
	return context.req.headers.authorization === 'RecarSuperSecret'
}

export default authChecker
