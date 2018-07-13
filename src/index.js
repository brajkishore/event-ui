import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootView from './components/RootView';

ReactDOM.render(<RootView />, document.getElementById('root'));
registerServiceWorker();
