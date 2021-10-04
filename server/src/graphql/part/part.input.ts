import { InputType, Field, Int, registerEnumType } from 'type-graphql'
import { Part, PartSortByField } from './../../entities/Part'

export enum SortByDirection {
	ASC = 'ASC',
	DESC = 'DESC'
}

registerEnumType(SortByDirection, {
	name: 'SortByDirection',
	description: 'The basic directions'
})

@InputType({ description: 'Filter parts' })
export class PartsFilterInput implements Partial<Part> {
	@Field({ nullable: true })
	manufacturer?: string

	@Field({ nullable: true })
	model?: string

	@Field({ nullable: true })
	color?: string

	@Field(() => Int, { nullable: true })
	year?: number
}

@InputType({ description: 'Sort parts' })
export class PartsSortByInput {
    @Field(() => SortByDirection, { nullable: true })
    direction?: SortByDirection = SortByDirection.ASC

	@Field(() => PartSortByField)
    field: PartSortByField
}

@InputType({ description: 'Add new part' })
export class CreatePartInput implements Omit<Part, 'id'> {
	@Field()
	name: string

	@Field(() => Int)
	price: number

	@Field()
	manufacturer: string

	@Field()
	model: string

	@Field(() => Int)
	year: number

	@Field()
	color: string
}

@InputType({ description: 'Edit part' })
export class EditPartInput implements Partial<Omit<Part, 'id'>> {
	@Field({ nullable: true })
	name?: string

	@Field(() => Int, { nullable: true })
	price?: number

	@Field({ nullable: true })
	manufacturer: string

	@Field({ nullable: true })
	model?: string

	@Field(() => Int, { nullable: true })
	year?: number

	@Field({ nullable: true })
	color?: string
}
