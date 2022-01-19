import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/app';
import reportWebVitals from './reportWebVitals';
import { getCard } from './Card/card';
import { addEditorChangeHandler } from './Card/card';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App card={getCard()}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

addEditorChangeHandler(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();