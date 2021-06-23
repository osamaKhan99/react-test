import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
 
class App extends Component {
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        )
    }
}
export default App;