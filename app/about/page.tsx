import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About Page',
	description: 'This is the about page of our website'
};

const About = () => {
	return (
		<>
			<h1>About</h1>
			<Link href='/'>Link to Home Page</Link>
		</>
	);
};
export default About;
