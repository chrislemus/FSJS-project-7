import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './Components/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);


