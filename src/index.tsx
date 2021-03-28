import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/state';
import {b} from "./lessons/lesson2/lesson2";
import {str} from "./lessons/lesson5/lesson5";
import d from "./lessons/lesson6/lesson6"
import lesson7 from "./lessons/lesson7/lesson7"
import lesson71 from "./lessons/lesson7/file"
import lesson8 from "./lessons/lesson8/lesson8"
const lessons = {
    lesson2: b
}

let c = str;
let d1 = d;
let l7 = lesson7;
let l8 = lesson71;

let l9 = lesson8;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
