import { UserDetails } from '@/generated/graphql';
import React from 'react';

const UserDetails = ({ user }: { user: UserDetails }) => {
	console.log('🤯', user);
	return <div>Foo</div>;
};

export default UserDetails;
