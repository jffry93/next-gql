import { ObjectType, Field, ID } from 'type-graphql';

// schema of movie table in prisma
@ObjectType()
export class UserDetails {
	@Field(() => String, { nullable: true })
	name?: string | null;

	@Field(() => String, { nullable: true })
	user_image?: string | null;

	@Field(() => [FilteredOpinionAttribute])
	watchlist!: FilteredOpinionAttribute[];

	@Field(() => [FilteredOpinionAttribute])
	recommend!: FilteredOpinionAttribute[];

	@Field(() => [FilteredOpinionAttribute])
	completed!: FilteredOpinionAttribute[];
}

@ObjectType()
export class FilteredOpinionAttribute {
	@Field(() => String)
	id!: string;

	@Field(() => String)
	title!: string;

	@Field(() => String)
	img_path!: string;
}
