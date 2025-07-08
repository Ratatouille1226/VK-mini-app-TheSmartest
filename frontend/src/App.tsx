import { Home } from "./pages/home/Home";
import styles from './app.module.css';

export const App = () => {

  return (
    <div className={styles["app"]}>
      <Home />
    </div>
  );
};
