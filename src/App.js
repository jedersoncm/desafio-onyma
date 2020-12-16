import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home'

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home }/>
      </Switch>
    </Provider>
  );
}

export default App;
