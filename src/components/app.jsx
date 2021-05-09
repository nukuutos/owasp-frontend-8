import { useState } from 'react';

import SignIn from './pages/sign-in/sign-in';
import Alert from './utils/alert';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from './pages/main/main';

const App = () => {
  const [alerts, setAlerts] = useState([]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/sign-in" render={() => <SignIn setAlerts={setAlerts} />} />
        <Route path="*">
          <Redirect to="/sign-in" />
        </Route>
      </Switch>

      <Alert alertsState={[alerts, setAlerts]} />
    </Router>
  );
};

export default App;
