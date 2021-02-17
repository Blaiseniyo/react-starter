import React from 'react';
import { connect } from "react-redux";
import createPost from '../actions/createPost';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import '../styles/container.css';
const NewPost =(props)=>{
    const cookies = new Cookies();
    const token=cookies.get('reactBlog'); 
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let form=document.querySelector('form'); 
        const bodyFormData = new FormData(form);
        await props.create(bodyFormData,props.token)
        props.history.push('/');
     }

     //if(!props.token || !token) return <Redirect to='/login'/>

    return(
        <div className="container">
                <form className="col s6"  onSubmit={handleSubmit}>
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
const mapStateToPropos=(state)=>{
    return{
        token:state.auth.token
    }
}
const mapDispatchTOPropos=(dispatch)=>{
    return{
        create:(form,token)=> dispatch(createPost(form,token))
    }
}
export {NewPost}
export default connect(mapStateToPropos,mapDispatchTOPropos)(NewPost);