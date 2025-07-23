import styles from './alreadyPassedQuiz.module.css';

export const AlreadyPassedQuiz = () => {
	return (
		<div className={styles['already__passed']}>
			<h3>Ты уже проходил этот уровень</h3>
			<p>Можешь перезаписать очки, купив попытку за 5 голосов и пройти уровень снова!</p>
			<button>Купить</button>
		</div>
	);
};
