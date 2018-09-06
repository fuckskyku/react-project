import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import './style/main.scss';
import App from './App';
import './rem.js';
import {Provider} from 'react-redux'
import 'swiper/dist/css/swiper.min.css'

ReactDOM.render(
		(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		)
		,document.getElementById('root'));

