import styles from './chooseLevel.module.css';

export const ChooseLevel = () => {
	return (
		<div className={styles['quiz']}>
			<h2>Выберите уровень сложности викторины</h2>
			<div className={styles['choose__level']}>
				<button className={styles['green']}>Разминка для ума</button>
				<button className={styles['yellow']}>Пора подумать</button>
				<button className={styles['red']}>Мозговой апокалипсис</button>
			</div>
		</div>
	);
};
