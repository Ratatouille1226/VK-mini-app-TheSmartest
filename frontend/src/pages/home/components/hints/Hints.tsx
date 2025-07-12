import styles from './hints.module.css';

export const Hints = () => {
	return (
		<div className={styles['hints']}>
			<h2>Ваши подсказки: 2</h2>
			<button>+</button>
		</div>
	);
};
