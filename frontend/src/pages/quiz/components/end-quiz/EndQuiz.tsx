import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import { AlreadyPassedQuiz } from '../already-passed-quiz/AlreadyPassedQuiz';

interface User {
	id: string;
	score: number;
	name: string;
	isEndEasyQuiz: boolean;
	isEndMediumQuiz: boolean;
	isEndHardQuiz: boolean;
	url: string;
}

interface EndQuizProps {
	score: number;
	questions: { title: string; variants: string[]; correct: number }[]; // типизируем вопрос
	setStep: (step: number) => void;
	setUserScore: () => void;
	currentUser?: User;
}

const EndQuiz: React.FC<EndQuizProps> = ({ score, questions, setStep, setUserScore, currentUser }) => {
	const type = useAppSelector((state) => state.type.type);

	const isAlreadyPassed =
		(type === 'easy' && currentUser?.isEndEasyQuiz) ||
		(type === 'medium' && currentUser?.isEndMediumQuiz) ||
		(type === 'hard' && currentUser?.isEndHardQuiz);

	return (
		<div>
			<span>
				Вы завершили тест: правильных ответов {score} из {questions.length}
			</span>
			<Link
				onClick={() => {
					setStep(0);
					setUserScore();
				}}
				to="/"
			>
				На главную
			</Link>
			{isAlreadyPassed && <AlreadyPassedQuiz />}
		</div>
	);
};

export default EndQuiz;
