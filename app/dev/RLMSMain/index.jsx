import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'


render((
    <Router history = {hashHistory}>
        <Route path="/" component = {App}>
            <IndexRoute component = {Home}/>
                <Route path="/repos" component = {Repos}>
                    <Route path = "/repos/;userName/:repoName" component = {Repo}/>
                </Route>
                <Route path ="/about" component = {About}/>
            </Route>
        </Router>
),document.getElementById('app'))