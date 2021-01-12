import React from 'react';

import './App.css'

import { Provider } from 'react-redux'
import Lista from './Components/Lista'

import store from './Store'

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Lista />
      </Provider>

    </div>
  );
}

export default App;
