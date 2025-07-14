import styles from './buttonsinformation.module.css';
import { Link } from 'react-router-dom';

export const ButtonsInformation = () => {
	return (
		<div className={styles['buttons']}>
			<h1>Самый умный</h1>
			<span>Привет Вася Пупкин скорее докажи что ты самый умный!</span>
			<div className={styles['buttons__block']}>
				<button>
					<Link to="/conditions">Условия викторины</Link>
				</button>
				<button className={styles['link__color']}>
					<Link to="/">Начать викторину</Link>
				</button>
			</div>
		</div>
	);
};
