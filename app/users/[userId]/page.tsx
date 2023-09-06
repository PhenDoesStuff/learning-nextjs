import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';

type Params = {
	params: {
		userId: string;
	};
};

const UserPage = async ({ params: { userId } }: Params) => {
	const userData: Promise<User> = getUser(userId);
	const userPostsData: Promise<Post[]> = getUserPosts(userId);
	// Above means that we're just sending both of these at the same time and we aren't waiting for anything

	// const [user, userPosts] = await Promise.all([userData, userPostsData]);

	const user = await userData;

	return (
		<>
			<h2>{user.name}</h2>
			<br />
			<Suspense fallback={<h2>Loading...</h2>}>
				<UserPosts promise={userPostsData} />
			</Suspense>
		</>
	);
};
export default UserPage;
