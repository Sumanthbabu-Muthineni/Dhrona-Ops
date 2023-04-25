import './App.css';
import VideoPage from './components/VideoPage';
import LoginPage  from './components/LoginPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App=()=> (
  
<BrowserRouter>
    <Switch>
    <Route exact path="/login"   component={LoginPage} />
     <Route exact path="/"       component={HomePage} />   
     <Route  exact path="/video" component={VideoPage} />   
    </Switch>
</BrowserRouter>
)

export default App;
