import styles from './leaderboard.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';

export const Leaderboard = () => {
	const user = useAppSelector((state) => state.user.list);

	return (
		<div className={styles['leaderboard']}>
			<h2>Список лидеров</h2>
			<div className={styles['user']}>
				{user.map((u) => (
					<>
						<img src={u.img} alt="sith" />
						<div className={styles['about']}>
							<span>{u.name}</span>
							<span>{u.score}</span>
						</div>
						<a href={u.url}>
							<i className="fa-solid fa-eye"></i>
						</a>
					</>
				))}
			</div>
			<Link className={styles['link']} to="/list-leaders">
				Открыть список лидеров
			</Link>
		</div>
	);
};
