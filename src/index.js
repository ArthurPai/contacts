import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import EmployeeService from './services/EmployeeService';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

const service = EmployeeService();

ReactDOM.render(<App service={service}/>, document.getElementById('root'));
registerServiceWorker();
