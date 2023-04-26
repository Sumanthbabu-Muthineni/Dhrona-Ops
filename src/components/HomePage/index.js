import './index.css'
import {Link} from 'react-router-dom'

const HomePage=()=>
    <div className='mycourse-Bg'> 
    <h1 className='course-heading'>HomePage</h1>
    <ul className='Courses-container'>
 <Link to="/CoursePage" className="nav-link"><li className='linux-container'>
      <h1 className='course-heading'>Linux</h1>
      <img src={require("../image/linux.png")} className='linux-image' alt="linux"/>
    </li></Link>   
   <Link to="/video" className="nav-link" ><li className='devops-container'> 
       <h1 className='course-heading'>Devops</h1>
       <img className='devops-image' src={require("../image/devops-pipeline.jpg")} alt="devops"/>
    </li></Link> 
 <Link to="/" className="nav-link"><li className='kubernates-container '>
          <h1 className='course-heading'>Kubernates</h1> 
          <img className='kubernates-image' src={require("../image/kubernates.png")} alt="Kubernetes"></img>
    </li></Link>   
   <Link to="/login" className="nav-link"><li className='web-development-container'>
        <h1 className='course-heading'>WebDevelopment</h1>
        <img className='webdevelopment-image' src={require("../image/webdevelopment.png")} alt="webdevelopment"></img>
    </li></Link> 
    </ul>
    </div>


export default HomePage