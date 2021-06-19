import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import FormLogin from './components/Login_Signup/FormLogin'
import VideoApp from './components/Video_app/VideoApp'


function App() {
  // console.log(IDmeet.generateID(5, 3))
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/:id"> <CallPage /> </Route> */}
        <Route exact path="/"> <HomePage /> </Route>
        <Route exact path="/login"> <FormLogin /> </Route>
        <Route exact path="/videoapp"> <VideoApp /> </Route>

        {/* <Route path="*"> <NoMatch /> </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
