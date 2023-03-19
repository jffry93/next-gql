import UserDetails from '@/components/UserDetails';
import { UserDetails as UserDetailsType } from '@/generated/graphql';
import { getUserData } from '@/graphql/api';
import React from 'react';

interface ParamsType {
	params: { id: string };
}

interface ProfileProps extends ParamsType {
	userDetails: UserDetailsType;
}

export async function getServerSideProps({ params }: ParamsType) {
	const userDetails = await getUserData({ user_id: params.id });

	return {
		props: {
			params,
			userDetails: userDetails.getUserData,
		},
	};
}

const Profile = ({ params, userDetails }: ProfileProps) => {
	return <UserDetails user={userDetails} />;
};

export default Profile;
