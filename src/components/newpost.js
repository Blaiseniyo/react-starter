import React,{Component} from 'react';
import '../styles/container.css';
import { connect } from "react-redux";
import axios from 'axios';
class posts extends Component{
    state={

    }
     handleSubmit=(e)=>{
         e.preventDefault();
        axios.post('https://capstone-project-rest-api.herokuapp.com/api/articles/', {
            title:document.getElementById('title').value,
            body:document.getElementById('content').value,
            coverImage:document.getElementById('picture').value
          }, {
            headers: {
              'Authorization': `Bearer ${this.props.token}` 
            }
          })
          .then(res=>{
              console.log(res)
          })
          
    }
    render(){

        return(
            <div className="container">
                 <form className="col s6"  onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate"  />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" cols="30" rows="10" className="validate" ></textarea>
                        </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <input type="file" name="" id="picture"/>
                        <label htmlFor="picture">Picture</label>
                    </div>
                </div>
                    <div className="row">
                        <input className="waves-effect waves-light btn" type="submit" value="SUBMIT" />
                    </div>
                </form>
           </div>
        )
    }
}
const mapStateToPropos=(state)=>{
    return{
        token:state.token
    }
}
export default connect(mapStateToPropos)(posts);