import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Home',
	description: 'This is the home page of our website'
};

export default function Home() {
	return (
		<main>
			<h1>Hello World!</h1>
			<Link href='/about'>Go to About Page</Link>
		</main>
	);
}
