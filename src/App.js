import './App.css';
import VideoPage from './components/VideoPage';
import LoginPage  from './components/LoginPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CoursePage from './components/CoursePage';

const App=()=>(
<BrowserRouter>
    <Switch>
    <Route  path="/login"   component={LoginPage} />
     <Route exact path="/"       component={HomePage} />  
     <Route   path="/CoursePage" component={CoursePage} />    
     <Route   path="/video" component={VideoPage} />   
    </Switch>
</BrowserRouter>
)

export default App;
