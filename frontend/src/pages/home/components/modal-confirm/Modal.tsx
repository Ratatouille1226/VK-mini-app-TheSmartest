import { useAppDispatch } from '../../../../hooks';
import { closeModal } from '../../../../slice-reducer/openModalSlice';
import styles from './modal.module.css';
import { Link } from 'react-router-dom';

export const Modal = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles['modal__container']}>
			<div className={styles['modal']}>
				<h2>Вы внимательно ознакомились с условиями викторины перед её началом?</h2>
				<div className={styles['buttons']}>
					<button>
						<Link to="/conditions">Нет, ознакомиться</Link>
					</button>
					<button onClick={() => dispatch(closeModal())}>
						<Link to="/choose-level">Да, начать викторину</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
