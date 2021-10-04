import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository, FindManyOptions } from 'typeorm'
import { Service } from 'typedi'
import { Resolver, Query, Mutation, Args, Authorized } from 'type-graphql'
import { Part } from '../../entities/Part'
import { PartsArgs, PartArgs, CreatePartArgs, EditPartArgs, DeletePartArgs } from './part.arguments'
import { CreatePartPayload, EditPartPayload, DeletePartPayload } from './part.payload'

@Resolver()
@Service()
export default class PartResolver {
	constructor (
		@InjectRepository(Part) private readonly partsRepository: Repository<Part>
	) { }

	@Query(() => [Part])
	async parts (
		@Args() { filters = {}, sortBy }: PartsArgs
	): Promise<Part[]> {
		const payload: FindManyOptions<Part> = {
			where: filters,
			order: sortBy?.field ? { [sortBy?.field]: sortBy.direction } : {}
		}
		return this.partsRepository.find(payload)
	}

	@Query(() => Part, { nullable: true })
	async part (
		@Args() { id }: PartArgs
	): Promise<Part | undefined> {
		return this.partsRepository.findOne({ id })
	}

	@Authorized()
	@Mutation(() => CreatePartPayload)
	async createPart (
		@Args() { input }: CreatePartArgs
	): Promise<CreatePartPayload> {
		const part = this.partsRepository.create(input)
		await this.partsRepository.save(part)
		return { part }
	}

	@Authorized()
	@Mutation(() => EditPartPayload)
	async editPart (
		@Args() { id, input }: EditPartArgs
	): Promise<EditPartPayload> {
		const part = await this.partsRepository.findOneOrFail({ id })
		const updatedPart = await this.partsRepository.save({ id, ...input })
		this.partsRepository.merge(part, updatedPart)
		return { part }
	}

	@Authorized()
	@Mutation(() => DeletePartPayload)
	async deletePart (
		@Args() { id }: DeletePartArgs
	): Promise<DeletePartPayload> {
		const part = await this.partsRepository.findOneOrFail({ id })
		await this.partsRepository.softDelete({ id })
		return { part }
	}
}
