import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/app';
import reportWebVitals from './reportWebVitals';
import { getStore } from './Store/store';

const store = getStore();

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App app={store.getState()}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  render();
});
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();