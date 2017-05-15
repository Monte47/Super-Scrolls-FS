import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const Root = () => (
    <Provider>
      <HashRouter>
        <h1>React is not working...yet</h1>
      </HashRouter>
    </Provider>
  );

  ReactDom.render(<Root />, root);
});
