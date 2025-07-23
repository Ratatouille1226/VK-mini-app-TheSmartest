import { Link } from 'react-router-dom';
import styles from './listLeaders.module.css';

export const ListLeaders = () => {
	return (
		<div className={styles['list__leaders']}>
			<h2>Тут будет таблица лидеров</h2>
			<Link to="/">На главную</Link>
		</div>
	);
};
