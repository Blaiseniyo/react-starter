import React,{Component} from 'react';
import '../styles/container.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Update extends Component{
    state={
        post:null,
        comments:[]
    }
    
    componentDidMount(){
        const id = this.props.match.params.post_id;
        console.log(this.props.token)
        console.log(id)
        axios.get('https://capstone-project-rest-api.herokuapp.com/api/articles/'+id)
        .then(res=>{
            console.log(res.data)
            this.setState({
                post:res.data.post,
                comments:res.data.comments
            })
        })
        .catch(()=>{
            console.log("opss something went wrong!! we could not get the data you requested for :)")
            return(
                <div className="center">opss something went wrong!! we could not get the data you requested for :)</div>

            )
        })
    }
     handleSubmit=(e)=>{
        e.preventDefault();
        let form=document.querySelector('form'); 
        console.log(form);
        const bodyFormData = {
            title:document.getElementById('title').value,
            body:document.getElementById('content').value
        }
        console.log(bodyFormData)
        console.log(this.props.token)
        axios.put(`https://capstone-project-rest-api.herokuapp.com/api/articles/${this.props.match.params.post_id}`,
            bodyFormData
          ,{
            headers: {
              'Authorization': `Bearer ${this.props.token}`
            }
          })
          .then(res=>{
              this.props.history.push("/");
          })
          
    }
    handlechange =(e)=>{
        e.target.value=e.target.value
    }
    render(){
        const updatefrom=this.state.post? (
            <form className="col s6"  onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                    <input id="title" type="text" name="title" className="validate" defaultValue={this.state.post.title}  />
                    {/* <label htmlFor="title">Title</label> */}
                </div>
            </div>
            <div className="row">
                <div className="">
                    {/* <label htmlFor="content">Content</label> */}
                    <textarea id="content" cols="90" rows="100" name="body"  defaultValue={this.state.post.body} onChange={this.handlechange}></textarea>
                </div>
            </div>
            <div className="row">
                <input className="waves-effect waves-light btn" type="submit" value="SUBMIT" />
            </div>
        </form>
        ) : (
            <div className="center"><h4>loading ...</h4></div>
        )
        return(
            <div className="container">
                {updatefrom}
           </div>
        )
    }
}
const mapStateToPropos=(state)=>{
    return{
        token:state.token
    }
}
export default connect(mapStateToPropos)(Update);