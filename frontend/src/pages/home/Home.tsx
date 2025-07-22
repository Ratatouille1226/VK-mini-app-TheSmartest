import styles from './home.module.css';
import { Hints, ButtonsInformation, Leaderboard, Modal } from './components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchUsers } from '../../slice-fetch/fetchUsers';

export const Home = () => {
	const isModal: boolean = useAppSelector((state) => state.modal.isOpen);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div className={styles['home']}>
			<Hints />
			<ButtonsInformation />
			<Leaderboard />
			{isModal ? <Modal /> : null}
		</div>
	);
};
