import React from 'react';
import {render} from 'react-dom';
import Request from 'superagent';
//import OtherApp from './app.jsx';
//var get = require('./getLessons.js');
//import OtherApp from '../app/app.jsx';
//var ReactTestUtils = require('react-addons-test-utils');

//require('react/addons').addons.TestUtils
var data = {
  "curriculum": {
    "id":0,
    "name":".NET",
    "lesson":[
    {
      "id":1,
      "topic":"Core",
      "week":1,
      "frameworks":[{"id":1, "title":".Net", "keywords":"class, property, polymorphism"}]
    },
    {
      "id":2,
      "topic":"Data",
        "week":2,
        "frameworks": [{"id":3, "title":"SQL", "keywords":"insert, table, stored procedure"},
        {"id":4, "title":"Entity", "keywords":"ORM, save changes"}]
      },
    {
      "id":5,
       "topic":"Angular",
        "week":3,
        "frameworks": [{"id":7, "title":"Angular", "keywords":"ng-repeat, directive"}]
      }
  ]
  }

}
var Curriculum = React.createClass({
    getInitialState () {
    return {
      curriculum: '',
      Lesson: ''
    };
  },
   componentDidMount() {
    
    /*this.serverRequest = $.get("./syllabus.json", function (result) {
      //var lastGist = result[0];
      this.setState({
        curriculum: result.curriculum,
        Lesson: result.curriculum.lesson
      });
    }.bind(this));*/
    /*this.serverRequest= Request.get("./syllabus.json").end(function(err,res){
       this.setState({
           curriculum:res.curriculum,
           Lesson:res.curriculum.lesson
           });
    }.bind(this));*/
    this.setState({
        curriculum:data.curriculum,
        Lesson:data.curriculum.lesson,
        test:100
    })
  },
   componentWillUnmount: function() {
    this.serverRequest.abort();
  },
    render () {
        if(this.state.Lesson[0] == null || this.state.Lesson[0] == undefined){
            return <p></p>
        }
       //console.log(this.state.Lesson);
        return (<div id="d1">
            <h1>{this.state.curriculum.name}</h1>
            {this.state.Lesson.map(function(name, index){
                var s = JSON.stringify(name.frameworks);
                return <div >
                <p>Week {name.week} {name.topic} </p>
                <Lesson framework={s} />
                <hr/>
                </div>;
            })}
        </div> );
    }
});

var Lesson = React.createClass({

    render () {
        console.log(this.props.framework);
        var s = JSON.parse(this.props.framework);
        return <h6>
            {s.map(function(name, index){
                return <div > <p><b>Framework: </b>{name.title}</p> <p>Keywords: {name.keywords}</p></div>;
            })}
         </h6> ;
    }
});

var T = React.createClass({
    render(){
        return <div>some text</div>
    }
});

render(<Curriculum/>, document.getElementById('myApp'));
//render(<OtherApp/>, document.getElementById('otherApp'));


if (module.hot) {
    module.hot.accept();
}

export default Curriculum
