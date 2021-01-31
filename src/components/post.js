import React,{Component} from 'react';
import "../styles/container.css";
import axios from "axios";

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
    render(){
        console.log(this.state.comments)
       const response = this.state.post?(
            <div className="article">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
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
                    <div className="comment">
                        <h1>{comment.name}</h1>
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
                <h3>Comments</h3>
                {commentsList}
            </div>
        )
    }
}

export default Post;