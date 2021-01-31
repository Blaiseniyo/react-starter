import React,{Component} from 'react';
import axios from 'axios';
import '../styles/container.css';
import {Link} from 'react-router-dom';
class home extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://capstone-project-rest-api.herokuapp.com/api/articles/')
        .then(posts=>{
            this.setState({
                posts:posts.data
            })
        })
        .catch(()=>{
            console.log("opss something went wrong!! we could not get the data you requested for :)")
            return(
                <div className="center">opss something went wrong!! we could not get the data you requested for :)</div>

            )
        })
    }
    
    render(){
        const {posts}= this.state
        const postList= posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card separator" key={post._id}>
                        <Link to={"post/" + post._id}>
                            <div className="card-content">
                                <span className="card-title">{post.title}</span>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    </div>
                )
            })
        ):(
            <div className="center">No Posts yet</div>
        )
        return(
            <div className="container">
                {postList}
            </div>
        )
    }
}
export default home;