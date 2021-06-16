import Head from 'next/head';
import Articles from '../components/Articles/Articles';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Load more button from placeholder API</title>
				<meta name='description' />
			</Head>

			<main>
				<Articles />
			</main>
		</div>
	);
}
