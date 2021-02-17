import React,{Component} from 'react';
import '../styles/container.css';
import {connect} from 'react-redux';
import loginUser from '../actions/loginAction';
import {Redirect} from 'react-router-dom'
class Login extends Component{
    state={
        email:"",
        password:""
    }
    handleEmailChange=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleSubmit= async(e)=>{
        e.preventDefault()
        await this.props.logIn(this.state); 
        this.props.history.push('/');
    }
    render(){
        console.log(this.props.token)
        if(this.props.token) return <Redirect to='/'/>
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} id='form'>
                    <div className="form-container">
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email'  onChange={this.handleEmailChange} />
                        <label htmlFor='password'>password</label>
                        <input type='password' id='password' onChange={this.handlePasswordChange}  />
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToPropos=(state)=>{
    return{
        token:state.auth.token
    }
}
const mapDispatchTOPropos=(dispatch)=>{
    return {
        logIn:(creds)=> dispatch(loginUser(creds))
    }
}

export {Login}
export default connect(mapStateToPropos,mapDispatchTOPropos)(Login);