import styles from './leaderboard.module.css';
import sith from '../../../../../../designImages/sith.jpg';
import { Link } from 'react-router-dom';

export const Leaderboard = () => {
	return (
		<div className={styles['leaderboard']}>
			<h2>Список лидеров</h2>
			<div className={styles['user']}>
				<img src={sith} alt="sith" />
				<span>Владыка Ситх</span>
			</div>
			<Link to="/">Открыть список лидеров</Link>
		</div>
	);
};
