import React from 'react';
import {connect} from 'react-redux'

const Comments=(props)=>{
    let comments = props.post?(props.post.comments):( null)
    const commentsList = comments && comments.length?(
        comments.map(comment=>{
            return(
                <div className="comment" key={comment._id}>
                    <h6>{comment.name}</h6>
                    <p>{comment.comment}</p>
                </div>
            )
        })
    ) :(
        null
    )

    return(
        <div>
            {commentsList}
        </div>
    )
}

const mapStateToPropos =(state)=>{
    return{
        post: state.posts.post
    }
}  
export {Comments}
export default connect(mapStateToPropos)(Comments)

