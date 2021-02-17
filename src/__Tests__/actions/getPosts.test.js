import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getPosts from '../../actions/getPosts';
import moxios from 'moxios';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
const mock = new MockAdapter(axios)
describe('Fetch Posts actions', () => {
  

  beforeEach(() => {
    moxios.install()
    store = mockStore({posts: {}})
  })
  afterEach(() => moxios.uninstall())
  const posts= [{
    _id:1,body:"just testing",title:"Testing boby"
  },{
    _id:2,body:"just testing",title:"Testing boby"
  }]

  it('Getting posts ', () => {
    mock.onGet('https://capstone-project-rest-api.herokuapp.com/api/articles/')
    .reply(200,{response:posts})
    store.dispatch(getPosts()).then((res)=>{
        const action=[{type:'GET_POSTS',posts}]
        expect(store.getActions()).toEqual(action)
    })
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent()
//       request.respondWith({
//        status: 200,
//        response:[
//             {},
//             {}
//        ]
//     })
    

//     return store.dispatch(getPosts()).then(() => {
//       const expectedActions = store.getActions();
//       expect(expectedActions[0].type).toEqual('GET_POSTS')
//     })
//   })


//   it('Dispatches FETCH_ACCOMMODATIONS_ERROR after task is unsuccessful', () => {

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent()
//       request.respondWith({
//        status: 200,
//        response: {
//          data: {
//           accommodations: {
//             rows: accommodationsPayload
//           }
//         }
//        }
//        })
//     })

//     return store.dispatch(actions.getAccommodations()).then(() => {
//       const expectedActions = store.getActions();
//       expect(expectedActions[0].type).toEqual('FETCH_ACCOMMODATIONS_PENDING')
//       expect(expectedActions[1].type).toEqual('FETCH_ACCOMMODATIONS_ERROR')
//     })
//   })
},5000)
})