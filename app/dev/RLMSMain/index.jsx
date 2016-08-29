import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.jsx'
import News from './News.jsx'
import User from './digest.jsx'
import Repo from './Repos.jsx'


render((
    <Router history = {hashHistory}>
        <Route path="/" component = {App}>
            <IndexRoute component = {News}/>
                <Route path ="user" component = {User}/>
                <Route path ="home" component = {News}/>
                <Route path ="repo" component = {Repo}/>
                
            </Route>
        </Router>
),document.getElementById('app'))