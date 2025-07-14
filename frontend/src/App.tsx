import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ImagesBackground } from './pages/home/components';
import { Conditions, Home } from './pages';

export const App = () => {
	return (
		<div className={styles['app']}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/conditions" element={<Conditions />} />
				</Routes>
			</BrowserRouter>
			<ImagesBackground />
		</div>
	);
};
