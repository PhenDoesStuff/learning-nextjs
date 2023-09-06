const getUserPosts = async (userId: string) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
		{ next: { revalidate: 60 } }
	);

	if (!res.ok) {
		throw new Error('Failed to fetch user');
	}

	return res.json();
};

export default getUserPosts;
