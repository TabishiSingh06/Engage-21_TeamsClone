import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import FormLogin from './components/Login_Signup/FormLogin';
import VideoApp from './components/Video_app/VideoApp';
import { Provider } from 'react-redux';
import Alert from './components/alert';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './PrivateRoute';
import Chat from './components/Chat/Chat';

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
        {/* <Header /> */}
        <Switch>
          {/* <Route exact path="/chat" component={Chat}></Route> */}
          <Route exact path="/"> <HomePage /> </Route>
          <Route exact path="/login"> <FormLogin /> </Route>
          <PrivateRoute exact path="/videoapp/" component={VideoApp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
