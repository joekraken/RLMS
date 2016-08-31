import React from 'react';
import {render} from 'react-dom';
import Request from 'superagent';
var res;

var Curriculum = React.createClass({
    getInitialState () {
    return {
      curriculum: '',
      Lesson: ''
    };
  },
   componentWillMount() {
       if(sessionStorage.getItem('batchName')){
           var b = sessionStorage.getItem('batchName').split('-')[2];
           if(b=="NET"){
               b=".NET";
           }
           console.log(b);
              var url = 'http://localhost:3000/getLesson/' + b;
              //var url = 'http://localhost:3000/getLesson/.Net';
    
    this.serverRequest = Request.get(url).end(function(err,result){
        this.setState({
            data:JSON.parse(result.text)
        });       
  }.bind(this));
       }
       else{
           console.log('no batch');
       }
},
   componentWillUnmount: function() {
    //this.serverRequest.abort();
  },
    render () {
        if(this.state.data == null || this.state.data == undefined){
            return(
                <div className="text-center">
                    <h1>You are not assigned to a batch!</h1>
                    <p>If you're recieving this message in error, please contact your trainer.</p>
                </div>
            ) 
        }
        else if(sessionStorage.getItem('batchName')){
           var hstyle = {'text-align':'center'};
            return(
                <div>
                    <h1 style={hstyle}>{this.state.data[0].curriculum}</h1>
                    {this.state.data.map(function(name, index){
                        var s = JSON.stringify(name.topic)
                        return <div >
                            <h3>Week {name.week}: {name.lessonName} </h3>
                            <Lesson2 framework={s}/>
                            <hr/>
                            </div>;
                    })}
                </div>
            );
        }
        else{
            return(
                <div className="text-center">
                    <h1>You are not assigned to a batch!</h1>
                    <p>If you're recieving this message in error, please contact your trainer.</p>
                </div>
            )            
        }
    }
});



var Lesson = React.createClass({
    render () {
        var s = JSON.parse(this.props.framework);
        return <h6>
            {s.map(function(name, index){
                return <div > <p><b>Framework: </b>{name.title}</p> <p><b>Keywords: </b>{name.keywords}</p></div>;
            })}
         </h6> ;
    }
});

var Lesson2 = React.createClass({
    render () {
        var s = JSON.parse(this.props.framework);
        return <table className="table table-bordered table-striped table-condensed">
        <thead>
            <tr>
                <th>Framework</th>
                <th>Keywords</th>
            </tr>
            </thead>
            <tbody>
            {s.map(function(name, index){
                return <tr> <td>{name.title}</td> <td>{name.keywords}</td></tr>;
            })}
            </tbody>
         </table> ;
    }
});

// render(<Curriculum/>, document.getElementById('curr'));

if (module.hot) {
    module.hot.accept();
}

export default Curriculum
