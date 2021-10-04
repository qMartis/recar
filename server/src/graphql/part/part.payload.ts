import { Part } from './../../entities/Part'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class CreatePartPayload {
	@Field(() => Part)
    part: Part;
}

@ObjectType()
export class EditPartPayload {
	@Field(() => Part)
    part: Part
}

@ObjectType()
export class DeletePartPayload {
	@Field(() => Part)
    part: Part
}
