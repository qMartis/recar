import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm'
import { ObjectType, Field, ID, Int, registerEnumType } from 'type-graphql'

export enum PartSortByField {
	ID = 'id',
	PRICE = 'price',
	MANUFACTURER = 'manufacturer',
	MODEL = 'model',
	COLOR = 'color',
	YEAR = 'year'
}

registerEnumType(PartSortByField, {
	name: 'PartSortByField'
})

@ObjectType()
@Entity()
export class Part {
	@Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

	@Field()
    @Column()
    name: string;

	@Field(() => Int)
    @Column({ type: 'int' })
    price: number;

	@Field()
    @Column()
    manufacturer: string;

	@Field()
    @Column()
    model: string;

	@Field(() => Int)
    @Column({ type: 'int' })
    year: number;

	@Field()
    @Column()
    color: string;

	@Field({ nullable: true })
	@DeleteDateColumn()
	deletedAt?: Date;
}
