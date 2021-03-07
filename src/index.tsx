import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/state';
import {b} from "./lessons/lesson2/lesson2";
import {str} from "./lessons/lesson5/lesson5";
const lessons = {
    lesson2: b
}

let c = str;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
