import React,{Component} from 'react';
import "../styles/container.css";
import axios from "axios";
import deletePost from '../helpers/deletePost';
import {connect} from 'react-redux';
class Post extends Component{
    state={
        post:null,
        comments:[]
    }

    componentDidMount(){
        const id = this.props.match.params.post_id;
        axios.get(`https://capstone-project-rest-api.herokuapp.com/api/articles/${id}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                post:res.data.post,
                comments:res.data.comments
            })
        })
    }

    handleDelete = async(e)=>{
        const id=this.state.post._id;
        const token =this.props.token;
        console.log(token);
        await deletePost(id,token);
        this.props.history.push('/');
    }
    render(){
        console.log(this.state.comments)
       const response = this.state.post?(
            <div className="article" key={this.state.post._id}>
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
                <div className="btnn" key="btn">
                    <button className="update">update</button>
                    <button className="delete" onClick={this.handleDelete}>delete</button>
                </div>
            </div>
            
        ):( 
            <div className="container">
                <h4>post loading...</h4>
            </div>
        )

        let comments = this.state.comments;
        const commentsList=comments.length ?(
            comments.map(comment=>{
                return(
                    <div className="comment" key={comment._id}>
                        <h6>{comment.name}</h6>
                        <p>{comment.comment}</p>
                    </div>
                )
            })
        ):(
            null
        );
        return(
            <div className="container">
                {response}
                <h5 key="comment">Comments</h5>
                {commentsList}
            </div>
        )
    }
}

const mapStateToPropos=(state)=>{
    return{
        token:state.token
    }
}

export default connect(mapStateToPropos)(Post);