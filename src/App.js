import React ,{Component} from 'react';
import Navbar from './components/navarbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import posts from './components/newpost';
import Login from './components/login';
import home from './components/home';
import Post from "./components/post";
import Update from '../src/components/updatePost'
//import AddCountry from './components/addCountry';

class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={home}/>
            <Route  path='/newpost' component={posts}/>
            <Route  path='/login' component={Login}/>
            <Route  path='/post/:post_id' component={Post}/>
            <Route  path='/posts/update/:post_id' component={Update}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
