import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import FormLogin from './components/Login_Signup/Form/FormLogin';
import VideoApp from './components/Video_app/VideoApp';
import { Provider } from 'react-redux';
import Alert from './components/alert';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import CreateRoom from './routes/createRoom';
import Room from './routes/room';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <Route exact path="/"> <HomePage /> </Route>
          <Route exact path="/login"> <FormLogin /> </Route>
          <Route exact path="/videoapp/"> <VideoApp /> </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
