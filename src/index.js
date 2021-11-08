import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';
import List from './List';
import Store from './store'


const store = new Store()

ReactDOM.render(
  <React.StrictMode>
    <List store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
