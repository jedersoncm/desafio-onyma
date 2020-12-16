import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home'
import Form from './pages/Form';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/form" component={ Form } />
      </Switch>
    </Provider>
  );
}

export default App;
