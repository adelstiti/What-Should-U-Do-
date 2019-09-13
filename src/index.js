import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App";
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from "react-redux";
import reminders from './reducers'

const store = createStore(reminders)
ReactDOM.render(
   <Provider store={store}> <App /> </Provider> ,document.getElementById('root')
)

