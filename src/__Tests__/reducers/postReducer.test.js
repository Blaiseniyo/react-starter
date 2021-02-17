import postReducer from '../../reducers/postsReducer';

describe('postReducer',()=>{
    const intitialState={
            posts:[],
            post:null
        }

    it("should return intialstate",()=>{

        const reducer=postReducer(undefined,{});
        expect(reducer).toEqual(intitialState);
    })

    it("update the property posts of the state",()=>{
        const posts=[{_d:1,title:"testing",body:'testing body'},{_d:2,title:"testing 2",body:'testing body 2'}];
        const action={
            type:'GET_POSTS',
            posts
        }
        const reducer=postReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            posts:posts
        });
    })

    it("update the property posts of the state",()=>{
        const post={_d:1,title:"testing",body:'testing body'};
        const action={
            type:'GET_POST',
            post
        }
        const reducer=postReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            post:post
        });
    })

    it("Add a post in posts of the state",()=>{
        const post={_d:1,title:"testing",body:'testing body'};
        const id=1;
        const action={
            type:'ADD_POST',
            post
        }
        const reducer=postReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            posts:[...intitialState.posts,post]
        });
    })

    it("Delete a post in posts of the state",()=>{
        const id=3;
        const action={
            type:'DELETE_POST',
            id
        }
        const reducer=postReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            post:null
        });
    })

    it("update a post in posts of the state",()=>{
        const body={_d:1,title:"testing",body:'testings body'};
        const posts=[{_d:1,title:"testing",body:'testings body'},{_d:2,title:"testing 2",body:'testing body 2'}]
        const id=1;
        const action={
            type:'UPDATE_POST',
            id,
            body
        }
        const reducer=postReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            posts:[]
        });
    })

    it("clean a post in the state",()=>{
        const action={
            type:'CLEAN_POST'
        }
        const reducer=postReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            post:null
        });
    })

    // it("should logout a user",()=>{

    //     const action={
    //         type:'LOGOUT'
    //     }
    //     const reducer=postReducer(intitialState,action);
    //     expect(reducer).toEqual({
    //         ...intitialState,
    //         token:null
    //     });
    // })

})