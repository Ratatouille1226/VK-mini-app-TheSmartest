import styles from './home.module.css';

export const Home = () => {

  return (
    <div className={styles['wrapper']}>
      <h1>Самый умный</h1>
      <div className={styles["container"]}>
          <div className={styles["conditions"]}>
            <h2>Условия викторины</h2>
          </div>
          <button className="start__quiz">Начать викторину</button>
          <button className="list__leaders">Посмотреть список лидеров</button>
      </div>
    </div>
  );
};
