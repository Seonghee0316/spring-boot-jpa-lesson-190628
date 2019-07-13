import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './createStore';

const history = createBrowserHistory();

const store = createStore(history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            < App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
