import styles from './leaderboard.module.css';
import sith from '../../../../../../designImages/sith.jpg';
import neSith from '../../../../../../designImages/neSith.jpg';
import { Link } from 'react-router-dom';

export const Leaderboard = () => {
	return (
		<div className={styles['leaderboard']}>
			<h2>Список лидеров</h2>
			<div className={styles['user']}>
				<img src={sith} alt="sith" />
				<span>Владыка Ситх</span>
				<a href="https://vk.com/id867482045">
					<i className="fa-solid fa-eye"></i>
				</a>
			</div>
			<div className={styles['user']}>
				<img src={neSith} alt="neSith" />
				<span>Уилл Смит</span>
				<a href="https://vk.com/tjacob">
					<i className="fa-solid fa-eye"></i>
				</a>
			</div>
			<Link className={styles['link']} to="/">
				Открыть список лидеров
			</Link>
		</div>
	);
};
