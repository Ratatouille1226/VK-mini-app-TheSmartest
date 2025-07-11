
import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Conditions } from "./pages/conditions/Conditions";
import { Home } from './pages/home/Home';

export const App = () => {

  return (
    <div className={styles["app"]}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/conditions" element={<Conditions />}/>
        </Routes>
      </BrowserRouter>
      <div className={styles["circle"]}></div>
    </div>
    
  );
};
