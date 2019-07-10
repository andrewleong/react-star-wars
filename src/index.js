import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import characterDetail from './components/CharacterDetail';


ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App} />
                <Route path="/character/:id" component={characterDetail} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
