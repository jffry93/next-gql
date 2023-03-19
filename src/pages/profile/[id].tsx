import UserDetails from '@/components/UserDetails';
import React from 'react';

interface ParamsType {
	params: { id: string };
}

export async function getServerSideProps({ params }: ParamsType) {
	// const userDetails = await getUserProfile({ user_id: params.id });

	return {
		props: {
			// movie: movieDetail.getSingleMovie,
			params,
		},
	};
}

const Profile = ({ params }: ParamsType) => {
	return <UserDetails user={{ test: 'value' }} />;
};

export default Profile;
