import { Link } from "react-router-dom";
import styles from './home.module.css';
import { Hints } from "./components";


export const Home = () => {

  return (
    <div className="home">
    <Hints />
    <Link to='/conditions' className={styles['link']}>Кто нажал тот лох</Link>
    </div>
  );
};
