import { useAppSelector } from '../../hooks';
import styles from './quiz.module.css';

export const Quiz = () => {
	const type: string = useAppSelector((state) => state.type.type);

	console.log(type);

	return (
		<div className={styles['wrapper__quiz']}>
			<div className={styles['container__quiz']}>
				<div className={styles['progress']}></div>
				<h1>Что такое ?</h1>
				<ul>
					<li>что</li>
					<li>где</li>
					<li>кто</li>
					<li>а?</li>
				</ul>
			</div>
		</div>
	);
};
