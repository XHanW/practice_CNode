import React from 'react';
import {Provider} from 'react-redux';
import store from './reducers/store';
import ReactDOM from 'react-dom';
import App from "./view/app";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

const Root = ({children,initialState={}}) => {
    return <Provider store={store(initialState)}>{children}</Provider>
}

ReactDOM.render(
    <Root store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);
registerServiceWorker();
