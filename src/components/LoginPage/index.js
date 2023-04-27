import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

class LoginPage extends Component{



LoginLeftContainer=()=> 

    <div className="left-side-content">
        <img src={require("../image/logo.svg")} alt="image not found" loading="lazy" className="logo-img"/>
        <div className="login-block">
            <h2 className="heading">Welcome to KodeKloud</h2>
            <div className="signup-sub-text">Don’t have an account? <a href="#" className="kk_link">Sign up for free</a></div>
            <a href="#" className="gb">
               <button className="google-btn">
               <GoogleIcon/>
                <span className="text-google">Sign in with Google</span>
               </button>
            </a>
            
            <a href="#" className="fb">
               <button className="facebook-btn"><FacebookIcon/>
                <span className="text-facebook">Continue with Facebook</span></button>
            </a>
            <a href="#" className="lb">
                <button className="linkedin-btn"> <LinkedInIcon/>
                    <span className="text-linkedin">Sign in with Linkedln</span></button>
            </a>

            <div className="or-content">
                <div className="line"></div>
                <span className="or-text">or</span>
                <div className="line"></div>
            </div>

            <form action="" className="login-form">
                <input type="email" name="email" id="email" placeholder="Your Email" className="email-box"/>
                <input type="password" name="password" id="password" placeholder="Your Password" className="email-box"/>
                <input type="submit" value="Sign in" className="signup-btn"/>
              
            </form>
            <div className="agree-text">By signing up you agree to our<a href="#" className="privacy-link">privacy policy</a></div>
        </div>
        
    </div>

    
 LoginRightContainer=()=>
 <div className="right-side-content">
     <div className="list-wrapper">
         <div className="signup-list">
             <img src={require("../image/check-circle.svg")} alt="image not found" loading="lazy" className="check-mark"/>
             <div>Gain access to our free labs</div>
         </div>
         <div className="signup-list">
             <img src={require("../image/check-circle.svg")} alt="image not found" loading="lazy" className="check-mark"/>
             <div>Gain access to our free courses</div>
         </div>
         <div className="signup-list">
             <img src={require("../image/check-circle.svg")} alt="image not found" loading="lazy" className="check-mark"/>
             <div>Try sample lessons of all course</div>
         </div>
         <div className="signup-list">
             <img src={require("../image/check-circle.svg")} alt="image not found" loading="lazy" className="check-mark"/>
             <div>Join our community of instructors and students</div>
         </div>
         <div className="signup-list">
             <img src={require("../image/check-circle.svg")} alt="image not found" loading="lazy" className="check-mark"/>
             <div>No credit card required</div>
         </div>
     </div>

     <div className="slideshow-container">

         <div className="mySlides fade" style={{display: "block"}}>
             <div className="slider-content">
                 <div className="customer-bio">
                     <img src={require("../image/user.png")} alt="customer image not found" loading="lazy" className="avtar"/>
                     <div>
                         <div className="user-name">Fernando Jordan Silva</div>
                         <div className="user-bio">software engineer</div>
                         <div>
                             <div className="star-wrapper">
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="textimonial-text">
                     I'm not a security specialist, but I have realized that the course explains very well every topic and you can use the labs in every lesson to practice. It's a hard certification but using this course I could learn every element step by step and test myself if I was ready using the exam simulators, and I was great because the simulators are very close to a real exam! using this course I got the certification in my first attempt!
                 </div>
             </div>
         </div>
         <div className="mySlides fade" style={{display:"none"}}>
             <div className="slider-content">
                 <div className="customer-bio">
                     <img src={require("../image/user.png")} alt="customer image not found" loading="lazy" className="avtar"/>
                     <div>
                         <div className="user-name">Fernando Jordan Silva</div>
                         <div className="user-bio">software engineer</div>
                         <div>
                             <div className="star-wrapper">
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="textimonial-text">
                     Thank you so much Mumshad Mannambeth for the awesome course, I couldn't find better than yours. These courses are well designed with awesome practice labs and have more than the required content to learn and pass the Kubernetes exams.Not sure how you are managing them with these much of low cost.
                 </div>
             </div>
         </div>
         <div className="mySlides fade" style={{display: "none"}}>
             <div className="slider-content">
                 <div className="customer-bio">
                     <img src={require("../image/user.png")} alt="customer image not found" loading="lazy" className="avtar"/>
                     <div>
                         <div className="user-name">Fernando Jordan Silva</div>
                         <div className="user-bio">software engineer</div>
                         <div>
                             <div className="star-wrapper">
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                                 <img src={require("../image/star.svg")} alt="star image" loading="lazy" className="star"/>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="textimonial-text">
                     ... Thank you Mumshad Mannambeth and the team for your contribution to computer education. If all training programs were like yours, there won't be a movement called #womanintech....
                 </div>
             </div>
         </div>
         
         </div>
         <br/>
         
         <div style={{textAlign:"center"}}>
           <span className="dot active" onClick="currentSlide(1)"></span> 
           <span className="dot" onClick="currentSlide(2)"></span> 
           <span className="dot" onClick="currentSlide(3)"></span> 
         </div>
         
 </div>

render(){
    
return (
    <div className="container">
        <div className="content">  
        {this.LoginLeftContainer()}
        {this.LoginRightContainer()}
        </div>
    </div>
       )
}

}

export default withRouter(LoginPage)




