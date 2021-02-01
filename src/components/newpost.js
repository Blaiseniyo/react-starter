import React,{Component} from 'react';
import '../styles/container.css';
import { connect } from "react-redux";
import axios from 'axios';
class posts extends Component{
    state={

    }
     handleSubmit=(e)=>{
        e.preventDefault();
        let form=document.querySelector('form'); 
        console.log(form);
        const bodyFormData = new FormData(form);
        console.log(bodyFormData)
        axios.post('https://capstone-project-rest-api.herokuapp.com/api/articles/',
            bodyFormData
          ,{
            headers: {
              'Authorization': `Bearer ${this.props.token}`,
              'Content-Type': 'multipart/form-data' 
            }
          })
          .then(res=>{
              console.log(res)
              this.props.history.push("/");
          })
          
    }
    render(){
        console.log(this.props.token)
        return(
            <div className="container">
                 <form className="col s6"  onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" name="title" className="validate"  />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" cols="30" rows="10" name="body" className="validate" ></textarea>
                        </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12">
                        <input type="file" name="coverImage" id="coverImage"/>
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