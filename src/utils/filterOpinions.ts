type FilterOpinionType = 'watchlist' | 'recommend' | 'completed';

export const filterOpinions = (
	opinionKey: FilterOpinionType,
	allOpinions: any[]
) => {
	const trueOpinions = allOpinions.filter((opinion) => {
		return opinion[opinionKey] === true;
	});
	const mappedOpinions = trueOpinions.map(
		(opinion: { id: string; title: string; img_path: string }) => {
			return {
				id: opinion.id,
				title: opinion.title,
				img_path: opinion.img_path,
			};
		}
	);

	return mappedOpinions;
};
