import styles from './home.module.css';
import { Hints, ButtonsInformation, Leaderboard } from './components';

export const Home = () => {
	return (
		<div className={styles['home']}>
			<Hints />
			<ButtonsInformation />
			<Leaderboard />
		</div>
	);
};
