import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'


class LoginPage extends Component{
    state ={userName:"",password:""}

    changeUsername=(event)=>{
this.setState({userName:event.target.value})
    }

    changePassword=(event)=>{
        this.setState({password:event.target.value})
      }

      redirectHomePage=()=>{
        const {history}=this.props
      history.replace("/")
      }

render(){
    const {userName,password}=this.state
return (
    <form onSubmit={this.redirectHomePage}>
     <input type="text" value={userName} onChange={this.changeUsername} placeholder='enter your email'/>
     <input type="password" onChange={this.changePassword} value={password} placeholder='enter password'/>
<button type="submit" >signin</button>
    </form>
    )
}

}

export default withRouter(LoginPage)
