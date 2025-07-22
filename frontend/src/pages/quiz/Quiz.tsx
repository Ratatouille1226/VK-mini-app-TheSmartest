import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './quiz.module.css';
import { fetchQuestions } from '../../slice-fetch/fetchQuestions';
import { setScoreUser } from '../../slice-fetch/setScoreUser';
import EndQuiz from './components/end-quiz/EndQuiz';

export const Quiz = () => {
	const dispatch = useAppDispatch();
	const type = useAppSelector((state) => state.type.type);
	const users = useAppSelector((state) => state.user.list);
	const currentUser = users.find((cur) => cur.id === '1'); //Текущий пользователь

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
		setStep(step + 1);

		if (index === question.correct) {
			setScore(score + 1);
		}
	};

	const setUserScore = () => {
		if (!type) return;

		const isAlreadyPassed =
			(type === 'easy' && currentUser?.isEndEasyQuiz) ||
			(type === 'medium' && currentUser?.isEndMediumQuiz) ||
			(type === 'hard' && currentUser?.isEndHardQuiz);

		if (isAlreadyPassed) return;

		dispatch(setScoreUser({ id: '1', score, type }));
	};

	// if (status === 'loading') return <p>Загрузка вопросов...</p>;
	// if (status === 'failed') return <p>Ошибка: {error}</p>;

	return (
		<div className={styles['wrapper__quiz']}>
			<div className={styles['container__quiz']}>
				<div
					className={styles['progress']}
					style={{ width: `${percentage}%`, borderTopRightRadius: `${percentage === 100 ? `20px` : `0px`}` }}
				></div>
				{step !== questions.length ? (
					<div className={styles['qustions__wrapper']}>
						<h2>{question.title}</h2>
						<div className={styles['questions']}>
							{question.variants.map((ques, i) => (
								<span onClick={() => onClickVariant(i)} key={i}>
									{ques}
								</span>
							))}
						</div>
					</div>
				) : (
					<EndQuiz
						score={score}
						questions={questions}
						setStep={setStep}
						setUserScore={setUserScore}
						currentUser={currentUser}
					/>
				)}
			</div>
		</div>
	);
};
