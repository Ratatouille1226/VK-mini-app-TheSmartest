import { useAppDispatch } from '../../../../hooks';
import { openModal } from '../../../../slice-reducer/openModalSlice';

import styles from './buttonsinformation.module.css';
import { Link } from 'react-router-dom';

export const ButtonsInformation = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles['buttons']}>
			<h1>Самый умный</h1>
			<span>Привет Вася Пупкин скорее докажи что ты самый умный!</span>
			<div className={styles['buttons__block']}>
				<Link to="/conditions">Условия викторины</Link>

				<Link onClick={() => dispatch(openModal())} className={styles['link__color']} to="/">
					Начать викторину
				</Link>
			</div>
		</div>
	);
};
