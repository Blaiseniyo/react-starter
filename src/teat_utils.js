
import React from 'react'
import App from './App';
import { render as rtlRender } from '@testing-library/react'
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import reducer from '../src/reducers/rootReducer';

const shallows=(children)=>{
    
    const  store = createStore(reducer, applyMiddleware(thunk));
    const wrapper= shallow(<Provider store={store}>{children}</Provider>)
    //console.log(wrapper)
    return wrapper;
}
  

// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
// }

// // re-export everything
// export * from '@testing-library/react'
// // override render method
export default shallows 