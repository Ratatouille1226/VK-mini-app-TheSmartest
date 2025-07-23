import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ImagesBackground } from './pages/home/components';
import { ChooseLevel, Conditions, Quiz, Home, ListLeaders } from './pages';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
	return (
		<Provider store={store}>
			<div className={styles['app']}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/conditions" element={<Conditions />} />
						<Route path="/choose-level" element={<ChooseLevel />} />
						<Route path="/quiz" element={<Quiz />} />
						<Route path="/list-leaders" element={<ListLeaders />} />
					</Routes>
				</BrowserRouter>
				<ImagesBackground />
			</div>
		</Provider>
	);
};
