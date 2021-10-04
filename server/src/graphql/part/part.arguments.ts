import { ArgsType, Field, ID } from 'type-graphql'
import { CreatePartInput, EditPartInput, PartsFilterInput, PartsSortByInput } from './part.input'

@ArgsType()
export class PartsArgs {
	@Field(() => PartsFilterInput, { nullable: true })
	filters?: PartsFilterInput

	@Field(() => PartsSortByInput, { nullable: true })
	sortBy?: PartsSortByInput
}

@ArgsType()
export class PartArgs {
	@Field(() => ID)
	id: string
}

@ArgsType()
export class CreatePartArgs {
	@Field(() => CreatePartInput)
	input: CreatePartInput
}

@ArgsType()
export class EditPartArgs {
	@Field(() => ID)
	id: string

	@Field(() => EditPartInput)
	input: EditPartInput
}

@ArgsType()
export class DeletePartArgs {
	@Field(() => ID)
	id: string
}
