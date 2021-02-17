import React,{Component} from 'react';
import '../styles/container.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import getPosts from '../actions/getPosts';
import cleanPost from '../actions/cleanpost'
class Home extends Component{
    
    componentDidMount(){
        this.props.posts();
        this.props.clean();
    }
    render(){
        const Posts= this.props.Posts.posts
        const postList= Posts.length ? (
            Posts.map(post=>{
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
const mapStateToPropos=(state)=>{
    return {
        Posts:state.posts
    }
}
const mapDispatchTOPropos=(dispatch)=>{
    return {
        posts:()=>dispatch(getPosts()),
        clean:()=>dispatch(cleanPost())
    }
}
export {Home}
export default connect(mapStateToPropos,mapDispatchTOPropos)(Home);