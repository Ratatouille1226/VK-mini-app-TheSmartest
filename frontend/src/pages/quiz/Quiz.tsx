import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './quiz.module.css';
import { fetchQuestions } from '../../slice-fetch/fetchQuestions';

export const Quiz = () => {
	const dispatch = useAppDispatch();
	const type = useAppSelector((state) => state.type.type);
	const { data: questions, status, error } = useAppSelector((state) => state.questions);

	useEffect(() => {
		if (type) {
			dispatch(fetchQuestions(type));
		}
	}, [type, dispatch]);

	if (status === 'loading') return <p>Загрузка вопросов...</p>;
	if (status === 'failed') return <p>Ошибка: {error}</p>;

	return (
		<div className={styles['wrapper__quiz']}>
			<div className={styles['container__quiz']}>
				<div className={styles['progress']}></div>
				<h1>Что такое ?</h1>
				<ul>
					{questions.map((q, i) => (
						<li key={i}>
							<h3>{q.title}</h3>
							<ul>
								{q.variants.map((v, idx) => (
									<li key={idx}>{v}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
