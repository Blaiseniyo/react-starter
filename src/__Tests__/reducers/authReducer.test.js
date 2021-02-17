import authReducer from '../../reducers/authReducer';
import loginAction from '../../actions/loginAction';

describe('loginReducer with action specified',()=>{
    const intitialState={
            token:null
        }

    it("should return intialstate",()=>{

        const reducer=authReducer(undefined,{});
        expect(reducer).toEqual(intitialState);
    })

    it("should login a user",()=>{
        const token='jsaduosfouwe0w4e20380238';
        const action={
            type:'LOGIN',
            token
        }
        const reducer=authReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            token:token
        });
    })

    it("should logout a user",()=>{

        const action={
            type:'LOGOUT'
        }
        const reducer=authReducer(intitialState,action);
        expect(reducer).toEqual({
            ...intitialState,
            token:null
        });
    })

})