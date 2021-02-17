import React from 'react';
import {shallow,mount} from 'enzyme';
import {Post} from '../components/post';
import {Comments} from '../components/comments';
import Comment from '../components/comments';
import App from "../App";
import {Login} from '../components/login';
import Navbars from '../components/navarbar'
import {Navbar} from '../components/navarbar'
import {Home} from '../components/home';
import {Link,NavLink} from 'react-router-dom';
import {LoggedinLinks} from '../components/loggedinLinks';
import LoggedinLink from '../components/loggedinLinks';
import LoggedoutLinks  from "../components/loggedoutLinks";
import {NewPost}  from "../components/newpost";
import {Update}  from "../components/updatePost";

const props={
    Posts:{
        post:{
            post:{_id:1,body:"just testing",title:"Testing boby"},
            comments:[{_id:2,name:"Tester",comment:"testing passed"}]
        },
        posts:[{_id:1,body:"just testing",title:"Testing boby"}]
    },
    post:{
        post:{_id:1,body:"just testing",title:"Testing boby"},
        comments:[{_id:2,name:"Tester",comment:"testing passed"}]
    },
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJsYWlzZUBibG9nLmNvbSIsInVzZXJJZCI6IjVmYmRlODg3OWNhY2VmNGM1NGRhODYxYiIsImlhdCI6MTYxMjUyODExMiwiZXhwIjoxNjEyNTMxNzEyfQ.hB3D0aBAbw_Kc4fXUoAA4XL0XOcMuAGIyyIUBDmD-ys',
    match:{
        params:{post_id:1}
    },
    comments:jest.fn(),
    delete:jest.fn(),
    getpost:jest.fn(),
    posts:jest.fn(),
    clean:jest.fn(),
    logout:jest.fn(),
    create:jest.fn()
} 
test('Testing Post component ', () => {
        const wrapper= shallow(<Post {...props}/>)
        expect(wrapper.find('div').length).toEqual(3)
        expect(wrapper.find('p').length).toEqual(1)
        expect(wrapper.find('h1').length).toEqual(1)
        expect(wrapper.find(Comment).length).toEqual(1)
        expect(wrapper.find('h5').text()).toBe('Comments')
        expect(wrapper.find(Link).length).toEqual(1)
        expect(wrapper.find("button").length).toEqual(2)
});

test('Testing Newpost component ', () => {
    const wrapper= shallow(<NewPost {...props}/>)
    expect(wrapper.find('div').length).toEqual(8)
    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find("input").length).toEqual(3)
    expect(wrapper.find("label").length).toEqual(3)
    expect(wrapper.find("textarea").length).toEqual(1)

});

test('Testing Newpost component ', () => {
    const wrapper= shallow(<Update {...props}/>)
    expect(wrapper.find('div').length).toEqual(6)
    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find("input").length).toEqual(2)
    expect(wrapper.find("textarea").length).toEqual(1)

});

test('Testing Comments component ', () => {
    const wrapper= shallow(<Comments {...props}/>)
    expect(wrapper.find('div').length).toEqual(2)
    expect(wrapper.find('h6').length).toEqual(1)
    expect(wrapper.find('h6').text()).toBe("Tester")
    expect(wrapper.find('p').text()).toBe("testing passed")
});

test('Testing  App Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbars).length).toEqual(1);  
  });

test('Testing  Navbar Component when looged in', () => {
    const wrapper = shallow(<Navbar {...props} />);
    expect(wrapper.find('div').length).toEqual(1);  
    expect(wrapper.find('nav').length).toEqual(1);  
    expect(wrapper.find('ul').length).toEqual(1);  
    expect(wrapper.find('li').length).toEqual(1);  
    expect(wrapper.find(NavLink).length).toEqual(2);  
    expect(wrapper.find(LoggedinLink).length).toEqual(1);  
});

test('Testing Post component when loggout', () => {
    const prop=props;
    prop.token=null;
    const wrapper= shallow(<Post {...prop}/>)
    expect(wrapper.find('div').length).toEqual(2)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper.find('h1').length).toEqual(1)
    expect(wrapper.find(Comment).length).toEqual(1)
    expect(wrapper.find('h5').text()).toBe('Comments')
    expect(wrapper.find(Link).length).toEqual(0)
    expect(wrapper.find("button").length).toEqual(0)
});
test('Testing  Navbar Component when logged out', () => {
    const prop=props;
    prop.token=null;
    const wrapper = shallow(<Navbar {...prop} />);
    expect(wrapper.find('div').length).toEqual(1);  
    expect(wrapper.find('nav').length).toEqual(1);  
    expect(wrapper.find('ul').length).toEqual(1);  
    expect(wrapper.find('li').length).toEqual(1);  
    expect(wrapper.find(NavLink).length).toEqual(2);  
    expect(wrapper.find(LoggedoutLinks).length).toEqual(1);  
});

test('Testing  LoggedinLinks', () => {
    const wrapper = shallow(<LoggedinLinks {...props} />); 
    expect(wrapper.find('ul').length).toEqual(1);  
    expect(wrapper.find('li').length).toEqual(2);  
    expect(wrapper.find(NavLink).length).toEqual(1);  
    expect(wrapper.find('a').length).toEqual(1);  
});

test('Testing  LoggedoutLinks', () => {
    const wrapper = shallow(<LoggedoutLinks/>); 
    expect(wrapper.find('ul').length).toEqual(1);  
    expect(wrapper.find('li').length).toEqual(1);  
    expect(wrapper.find(NavLink).length).toEqual(1);  
});

test('Testing the login compoment', () => {
    const prop=props;
    prop.token=null;
    const wrapper= shallow(<Login {...prop}/>)
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').length).toEqual(2);
    expect(wrapper.find('button').length).toEqual(1);
});

test('it should show Home compoment with the post in it if any  ', () => {
    const wrapper= shallow(<Home {...props}/>)
    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(3);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
});


