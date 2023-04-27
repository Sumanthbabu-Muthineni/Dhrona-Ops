import './App.css';
import VideoPage from './components/VideoPage';
import LoginPage  from './components/LoginPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom'
import CoursePage from './components/CoursePage';

const App=()=>(
<BrowserRouter>
    <Switch>
    <Route  path="/login"   component={LoginPage} />
     <Route exact path="/"       component={HomePage} />  
     <Route exact  path="/CoursePage" component={CoursePage} />    
     <Route exact  path="/video" component={VideoPage} />   
     <Redirect to="/" />
    </Switch>
</BrowserRouter>
)

export default App;
