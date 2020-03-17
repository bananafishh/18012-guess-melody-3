import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer/reducer';

import App from './components/app/app.jsx';

import questions from './mocks/questions.js';

const Settings = {
  ERRORS_COUNT_MAX: 3
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={Settings.ERRORS_COUNT_MAX}
        questions={questions}
      />
    </Provider>,
    document.getElementById(`root`)
);
