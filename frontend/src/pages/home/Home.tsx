import styles from './home.module.css';
import { Hints, ButtonsInformation, Leaderboard, Modal } from './components';
import { useAppSelector } from '../../hooks';

export const Home = () => {
	const isModal: boolean = useAppSelector((state) => state.modal.isOpen);

	return (
		<div className={styles['home']}>
			<Hints />
			<ButtonsInformation />
			<Leaderboard />
			{isModal ? <Modal /> : null}
		</div>
	);
};
