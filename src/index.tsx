import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/state';
import {b} from "./lessons/lesson2/lesson2";
import {str} from "./lessons/lesson5/lesson5";
import d from "./lessons/lesson6/lesson6"
const lessons = {
    lesson2: b
}

let c = str;
let d1 = d;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
