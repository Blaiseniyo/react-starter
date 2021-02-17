import React,{Component} from 'react';
import '../styles/container.css';
import {connect} from 'react-redux';
import updatePost from '../actions/updatePost';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

class Update extends Component{
    state={
        post:null,
        comments:[]
    }
    
     handleSubmit=async(e)=>{
        e.preventDefault();
        const body = {
            title:document.getElementById('title').value,
            body:document.getElementById('content').value
        }
        console.log(this.props)
        await this.props.update(this.props.match.params.post_id,body,this.props.token);
        this.props.history.push("/");
          
    }
    render(){
        const cookies = new Cookies();
        const token=cookies.get('reactBlog'); 
        //if(!this.props.token || !token) return <Redirect to='/login'/>
        const id = this.props.match.params.post_id;
        const Posts= this.props.Posts.posts;
        let post=null;
        for(let i=0; i < Posts.length;i++){
            if(Posts[i]._id===id){
                post=Posts[i];
            }
        }
        const updatefrom=post? (
            <form className="col s6"  onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                    <input id="title" type="text" name="title" className="validate" defaultValue={post.title}  />
                    {/* <label htmlFor="title">Title</label> */}
                </div>
            </div>
            <div className="row">
                <div className="">
                    {/* <label htmlFor="content">Content</label> */}
                    <textarea id="content" cols="90" rows="100" name="body"  defaultValue={post.body} onChange={this.handlechange}></textarea>
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
        token:state.auth.token,
        Posts:state.posts
    }
}

const mapDispatchTOPropos=(dispatch)=>{
    return{
        update:(id,body,token)=> dispatch(updatePost(id,body,token))
    }
}
export{Update}
export default connect(mapStateToPropos,mapDispatchTOPropos)(Update);