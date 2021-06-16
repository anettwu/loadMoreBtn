import React, { useState, useEffect } from 'react';
import styles from './Articles.module.css';

const Articles = () => {
	const endpoint = 'https://jsonplaceholder.typicode.com/photos?';
	const limit = 4;

	const [articles, setArticles] = useState([]);
	const [start, setStart] = useState(0);

	const getPhotos = async (start, limit) => {
		const response = await fetch(`${endpoint}_start=${start}&_limit=${limit}`);
		const data = await response.json();
		setArticles([...articles, ...data]);
	};

	useEffect(() => {
		getPhotos(start, limit);
		setStart(limit);
	}, []);

	const handleLoadMore = () => {
		setStart(start + limit);
		getPhotos(start, limit);
	};
	return (
		<div className={styles.wrap}>
			<section className={styles.articles}>
				{articles.map((article) => (
					<article key={article.id} className={styles.article}>
						<img src={article.thumbnailUrl} alt={article.title} />
						<p key={article.id}>{article.title}</p>
					</article>
				))}
			</section>
			<button className={styles.btn} onClick={handleLoadMore}>
				load more
			</button>
		</div>
	);
};

export default Articles;
