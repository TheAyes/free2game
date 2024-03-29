import React from 'react';
import style from './RecentlyAddedPage.module.scss';
import { useState, useEffect } from 'react';

import GameItem from '../../components/ListItems/GameItem.jsx';
import HeroSection from '../../components/layout/HeroSection.jsx';


const RecentlyAddedPage = () => {

	const [recentlyAdded, setRecentlyAdded] = useState([]);

	useEffect(() => {

		fetch('https://www.freetogame.com/api/games?sort-by=release-date')
			.then((res) => res.json())
			.then((data) => setRecentlyAdded(data))
	}, []);

	console.log(recentlyAdded);


	return (
		<main className={style.recentlyAddedPage}>

			<HeroSection title="RECENTLY ADDED" backgroundImage={"https://www.freetogame.com/g/222/MechWarrior-Online-3.jpg"} />
			<section className={style.gridList}>
				{recentlyAdded.map((game) => (
					<GameItem
						key={game.id}
						id={game.id}
						img={game.thumbnail}
						title={game.title}
						platform={game.platform}
						genre={game.genre}
					/>
				))}
			</section>
		</main>
	);
};

export default RecentlyAddedPage;
