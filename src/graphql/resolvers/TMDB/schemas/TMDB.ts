// Schema used for movie thumbnails
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ImageAttribute {
	@Field(() => String)
	backdrop_path!: string;

	@Field(() => String)
	poster_path!: string;
}

@ObjectType()
class VoteAttribute {
	@Field(() => Number)
	vote_average!: number;

	@Field(() => Number)
	vote_count!: number;
}

@ObjectType()
export class TMDB {
	@Field(() => ID)
	id!: string;

	@Field(() => String)
	title!: string;

	@Field(() => String)
	overview!: string;

	@Field(() => ImageAttribute)
	img_data!: ImageAttribute;

	@Field(() => VoteAttribute)
	vote_data!: VoteAttribute;

	@Field(() => String)
	release_date!: string;
}
