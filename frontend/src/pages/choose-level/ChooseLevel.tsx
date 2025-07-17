import { Link } from 'react-router-dom';
import styles from './chooseLevel.module.css';
import { useAppDispatch } from '../../hooks';
import { setType } from '../../slice-reducer/typeQuizSlice';

export const ChooseLevel = () => {
	const dispatch = useAppDispatch();

	//Смена типа квиза, от того какое значение придёт будет зависеть уровень квиза, (сделано для того чтобы для трёх викторин был один компонент)
	const handleType = (level: 'easy' | 'medium' | 'hard') => {
		dispatch(setType(level));
	};

	return (
		<div className={styles['quiz']}>
			<h2>Выберите уровень сложности викторины</h2>
			<div className={styles['choose__level']}>
				<Link onClick={() => handleType('easy')} to="/quiz">
					Разминка для ума
				</Link>
				<Link onClick={() => handleType('medium')} to="/quiz">
					Пора подумать
				</Link>
				<Link onClick={() => handleType('hard')} to="/quiz">
					Мозговой апокалипсис
				</Link>
			</div>
		</div>
	);
};
