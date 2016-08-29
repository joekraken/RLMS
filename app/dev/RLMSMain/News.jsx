import React from 'react';
import {render} from 'react-dom';
import { IndexLink , Link } from "react-router";

class News extends React.Component{

    constructor(){
        super();
        this.state ={data:[
            {Name:"Cory Davenport", Batch:".NET",StartDate:"08/24/16",Trainer:"Fred Bellote"}
        ]}
    }
    render(){
        return(
            <div>
                <article>
                    <h2>
                        Iphone event!
                    </h2>
                    <p>
                        Mark your calendars for Sept. 7 at 10 a.m. Pacific, when Apple will unveil the iPhone 7—and possibly the Apple Watch 2—at the Bill Graham Civic Auditorium in San Francisco.
                    </p>
                </article>
                <hr/>
                <article>
                    <h2>
                        Election hacked?
                    </h2>
                    <p>
                        The FBI has reportedly found evidence that foreign hackers breached two state election databases in recent weeks.
                    </p>
                </article>
                <article>
                    <h2>
                        Iphone event!
                    </h2>
                    <p>
                        Mark your calendars for Sept. 7 at 10 a.m. Pacific, when Apple will unveil the iPhone 7—and possibly the Apple Watch 2—at the Bill Graham Civic Auditorium in San Francisco.
                    </p>
                </article>
                <hr/>
                <article>
                    <h2>
                        Election hacked?
                    </h2>
                    <p>
                        The FBI has reportedly found evidence that foreign hackers breached two state election databases in recent weeks.
                    </p>
                </article>
                <article>
                    <h2>
                        Iphone event!
                    </h2>
                    <p>
                        Mark your calendars for Sept. 7 at 10 a.m. Pacific, when Apple will unveil the iPhone 7—and possibly the Apple Watch 2—at the Bill Graham Civic Auditorium in San Francisco.
                    </p>
                </article>
                <hr/>
                <article>
                    <h2>
                        Election hacked?
                    </h2>
                    <p>
                        The FBI has reportedly found evidence that foreign hackers breached two state election databases in recent weeks.
                    </p>
                </article>
                <article>
                    <h2>
                        Iphone event!
                    </h2>
                    <p>
                        Mark your calendars for Sept. 7 at 10 a.m. Pacific, when Apple will unveil the iPhone 7—and possibly the Apple Watch 2—at the Bill Graham Civic Auditorium in San Francisco.
                    </p>
                </article>
                <hr/>
                <article>
                    <h2>
                        Election hacked?
                    </h2>
                    <p>
                        The FBI has reportedly found evidence that foreign hackers breached two state election databases in recent weeks.
                    </p>
                </article>
            </div>
            )

    }
}

export default News