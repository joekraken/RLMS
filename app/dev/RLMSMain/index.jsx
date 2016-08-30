import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.jsx'
import User from './digest.jsx'
import Home from './home.jsx'

render((
    //////////////////////////////
    //for new route
    //<Route path = "name of reference" component = {name of import of component}/>
    //add to list below
    //////////////////////////////
    //for a call from function initialize 
    //contextTypes: {
    //router: React.PropTypes.object.isRequired
    //},
    //and then in the function call
    //function example
    //test : function(){
    //this.context.router.push('/#/home');
    //},
    //////////////////////////////
    //onClick={test}
    ////////////////////////////////
    <Router history = {hashHistory}>
        <Route path="/" component = {App}>
            <IndexRoute component = {Home}/>
            <Route path="/login" component={Home}/>
            <Route path="/signUp" component={Home}/>
            <Route path="/home" component={Home}>
                <Route path="/home/admin" component={Home}/>
                <Route path="/home/curriculum" component={Home}/>
                <Route path="/home/exam" component={Home}/>
                <Route path="/home/forum" component={Home}/>
                <Route path="/home/user" component={Home}/>
            </Route>
        </Route>
    </Router>
),document.getElementById('app'))