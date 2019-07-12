import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import characterDetail from './components/CharacterDetail';


ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/character/:id" component={characterDetail} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
