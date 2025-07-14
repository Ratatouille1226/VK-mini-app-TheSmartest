import book from '../../../../assets/book.png';
import lamp from '../../../../assets/lamp.png';
import hat from '../../../../assets/hat.png';
import circule from '../../../../assets/circule.png';

import styles from './images.module.css';

export const ImagesBackground = () => {
	return (
		<>
			<div className={styles['circle']}></div>
			<img className={styles['book']} src={book} alt="book" />
			<img className={styles['lamp']} src={lamp} alt="lamp" />
			<img className={styles['hat']} src={hat} alt="hat" />
			<img className={styles['circule']} src={circule} alt="circule" />
		</>
	);
};
