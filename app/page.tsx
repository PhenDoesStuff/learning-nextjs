import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Home',
	description: 'This is the home page of our website'
};

export default function Home() {
	return (
		<main>
			<h1>Home Page</h1>
			<p>
				<Link href='/users'>Users</Link>
			</p>
		</main>
	);
}
