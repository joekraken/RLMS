import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App.jsx'
import About from './About.jsx'
import Repos from './Repos.jsx'
import Repo from './Repo.jsx'
import Home from './Home.jsx'
import News from './News.jsx'
import User from './digest.jsx'


render((
    <Router history = {hashHistory}>
        <Route path="/" component = {App}>
            <IndexRoute component = {News}/>
                <Route path="/repos" component = {Repos}>
                    <Route path = "/repos/;userName/:repoName" component = {Repo}/>
                </Route>
                <Route path ="user" component = {User}/>
                <Route path ="home" component = {News}/>
            </Route>
        </Router>
),document.getElementById('app'))