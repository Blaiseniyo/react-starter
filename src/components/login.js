import React,{Component} from 'react';
import '../styles/container.css';
import {connect} from 'react-redux';
import loginUser from '../actions/loginAction';
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
    handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(this.state)
        // axios.post('https://capstone-project-rest-api.herokuapp.com/api/user/login', this.state)
        // .then(res=>{
        //     this.setState({
        //         token:res.data.token
        //     })
        //     console.log(this.state);
        // })
        this.props.logIn(this.state);
    }
    render(){
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

const mapDispatchTOPropos=(dispatch)=>{
    return {
        logIn:(creds)=> dispatch(loginUser(creds))
    }
}

export default connect(null,mapDispatchTOPropos)(Login);