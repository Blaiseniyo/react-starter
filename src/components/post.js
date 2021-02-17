import React,{Component} from 'react';
import Comments from "./comments";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import getComments from '../actions/getComments';
import deletePost from '../actions/deletePost';
import getpost from '../actions/getpost';
import Cookies from 'universal-cookie';
import "../styles/container.css";
class Post extends Component{
    
    componentDidMount(){
        const id = this.props.match.params.post_id;
        this.props.getpost(id);
    }

    handleDelete = async(e)=>{
        const id = this.props.match.params.post_id;
        const token =this.props.token;
        await this.props.delete(id,token);
        this.props.history.push('/');
    }
    render(){
        const cookies = new Cookies();
        const token=cookies.get('reactBlog'); 
        const post= this.props.Posts.post ? (this.props.Posts.post.post):(null);
        const btn=(this.props.token || token) && post?(
            <div className="btnn" key="btn">
                <Link to={`/posts/update/${post._id}`}><button className="update">update</button></Link>
                <button className="delete" onClick={this.handleDelete} id={post._id}>delete</button>
            </div>
        ):(null)
       const response = post?(
            <div className="article" key={post._id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                {btn}
            </div>
            
        ):( 
            <div className="container">
                <h4>post loading...</h4>
            </div>
        )
        return(
            <div className="container">
                {response}
                <h5 key="comment">Comments</h5>
                <Comments/>
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
        comments:(id)=> dispatch(getComments(id)),
        delete:(id,token)=> dispatch(deletePost(id,token)),
        getpost:(id)=> dispatch(getpost(id))
    }
}

export {Post};
export default connect(mapStateToPropos,mapDispatchTOPropos)(Post);