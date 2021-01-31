import React ,{Component} from 'react';
import Navbar from './components/navarbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import posts from './components/newpost';
import Login from './components/login';
import home from './components/home';
import Post from "./components/post";
//import AddCountry from './components/addCountry';

class App extends Component {
  state = {
    countries:[
      {name:'blaise',belt:'yelllow',Age:23,id:1},
      {name:'niyonkuru',belt:'blue',Age:24,id:2},
      {name:'Tonto',belt:'black',Age:25,id:3}
    ]
  }
  addCountry=(country)=>{
    console.log(country)
    country.id=Math.random();
    let countries=[...this.state.countries,country]
    console.log(countries)
    this.setState({
      countries:countries
    })
  }
  viewPost =(id)=>{
    console.log(id);
  }
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
