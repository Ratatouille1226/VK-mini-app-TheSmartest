import styles from './home.module.css';
import { Hints, ButtonsInformation, Leaderboard, Modal } from './components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchUsers, postUsers } from '../../slice-fetch/fetchUsers';
import bridge from '@vkontakte/vk-bridge';

export interface IUserPayload {
	id: string;
	name: string;
	url: string;
	img: string;
	score?: number;
	isEndEasyQuiz?: boolean;
	isEndMediumQuiz?: boolean;
	isEndHardQuiz?: boolean;
	hints?: number;
}

export const Home = () => {
	const isModal: boolean = useAppSelector((state) => state.modal.isOpen);
	// const users = useAppSelector((state) => state.user.list);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// Инициализация bridge
		bridge.send('VKWebAppInit');

		// Получение данных профиля
		bridge
			.send('VKWebAppGetUserInfo')
			.then((userInfo) => {
				const userId = userInfo.id.toString();

				dispatch(fetchUsers()).then((action) => {
					const users = action.payload as IUserPayload[];
					const existingUser = users.find((u) => u.id === userId);

					if (!existingUser) {
						const userPayload = {
							id: userId,
							score: 0,
							name: `${userInfo.first_name} ${userInfo.last_name}`,
							isEndEasyQuiz: false,
							isEndMediumQuiz: false,
							isEndHardQuiz: false,
							url: `https://vk.com/id${userInfo.id}`,
							img: userInfo.photo_100,
						};
						dispatch(postUsers(userPayload));
					}
				});
			})
			.catch((err) => {
				console.error('Ошибка получения данных профиля:', err);
			});
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
