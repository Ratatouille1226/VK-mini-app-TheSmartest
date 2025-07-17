import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './quiz.module.css';
import { fetchQuestions } from '../../slice-fetch/fetchQuestions';
import { Link } from 'react-router-dom';

export const Quiz = () => {
	const dispatch = useAppDispatch();
	const type = useAppSelector((state) => state.type.type);
	const { data: questions, status, error } = useAppSelector((state) => state.questions);

	const [step, setStep] = useState<number>(0);
	const question = questions[step]; //Текущий вопрос (определяем по индексу с помощью шага);
	const [score, setScore] = useState<number>(0); //Счёт правильных ответов
	const percentage = Math.round((step / questions.length) * 100); //Шкала прогресса сколько вопросов

	useEffect(() => {
		if (type) {
			dispatch(fetchQuestions(type));
		}
	}, [type, dispatch]);

	const onClickVariant = (index: number) => {
		console.log(index);
		setStep(step + 1);

		if (index === question.correct) {
			setScore(score + 1);
		}
	};

	if (status === 'loading') return <p>Загрузка вопросов...</p>;
	if (status === 'failed') return <p>Ошибка: {error}</p>;

	return (
		<div className={styles['wrapper__quiz']}>
			<div className={styles['container__quiz']}>
				<div className={styles['progress']} style={{ width: `${percentage}%` }}></div>
				{step !== questions.length ? (
					<>
						<h1>{question.title}</h1>
						<ul>
							{question.variants.map((ques, i) => (
								<li onClick={() => onClickVariant(i)} key={i}>
									{ques}
								</li>
							))}
						</ul>
					</>
				) : (
					<>
						<span>
							Вы завершили тест: правильных ответов {score} из {questions.length}
						</span>
						<Link onClick={() => setStep(0)} to="/">
							На главную
						</Link>
					</>
				)}
			</div>
		</div>
	);
};
