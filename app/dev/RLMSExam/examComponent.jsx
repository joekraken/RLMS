import React from 'react';
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import Request from 'superagent';

//local vars for testing code
var testC = {
    topic: "C#",
    questions: [
        {
            id: "1",
            ques:"What is a jagged array in C#",
            ans:"An array of arrays",
            weight: 3,
            options:[
                {text:"An array that no one uses"},
                {text:"An array developed by Mike Jagger"},
                {text:"An array of arrays"},
                {text:"An array that can dynamically allocate more memory if needed"}
            ]
        },
        {
            id: "2",
            ques:"Can you force garbage collection in C#?",
            ans:"Kinda",
            weight: 2,
            options:[
                {text:"Not technically"},
                {text:"Kinda"},
                {text:"Yes"},
                {text:"Well, in Java you can't."}
            ]
        },
        {
            id: "3",
            ques: "Can you return multiple values from a function in C#?",
            ans: "True",
            weight: 1,
            options: [
                {text: "True"},
                {text: "False"}
            ]
        }
    ]
};
var testDB = {
    topic: "Java",
    questions: [
        {
            id: "1",
            ques:"Why is C# better than Java",
            ans:"All of the above",
            weight: 5,
            options:[
                {text:"Because .NET rocks"},
                {text:"Java doesn't have LINQ, yet.."},
                {text:"A C# guy made this"},
                {text:"C# has access to pointers"},
                {text:"All of the above"}
            ]
        },
        {
            id: "2",
            ques:"Difference between truncate and delete?",
            ans:"You can't rollback with delete.",
            weight: 5,
            options:[
                {text:"The same"},
                {text:"Truncate sounds cool"},
                {text:"I like truncate"},
                {text:"You can't rollback with delete."}
            ]
        },
        {
            id: "3",
            ques: "What is the difference between StringBuffer and StringBuilder in Java?",
            ans: "StringBuffer methods are synchronized",
            weight: 1,
            options: [
                {text: "StringBuffer methods are synchronized"},
                {text: "StringBuilder is thread safe"},
                {text: "StringBuffer is faster when calling the same methods of each class"},
                {text: "StringBuilder value can be changed"}
            ]
        }
    ]
};
var res;

var Exam = React.createClass({
    /*properties
     * input= Holding entire test
     */
    getInitialState: function() {
        return {totalscore : 0, testSubmitted: false, q:""};

    },
    handleChange: function(result) {
        this.setState({totalscore: result.totalscore, testSubmitted: true});
    },

    //api call
    getExam(){
        var url = 'http://localhost:3000/getExam';
        Request.get(url).then(result =>{
            res = JSON.parse(result.text);
            console.log(res[0]);
            console.log(testC);
            //depending on batch do something
            this.setState({q:res[1]});
        });
    },

    componentWillMount(){
        this.getExam()
    },

    render: function(){
        var totalPoints = 0;
        if(this.state.q){
            this.state.q.questions.map(question => totalPoints += question.weight);
            return(
                <div>
                    <h1>Exam for C#</h1>
                    <hr/>
                    {/*<ProgressBar active now={question answered/this.props.input.questions.length*100}/>*/}
                    <table className="table-bordered">
                        <tbody>
                        <tr>
                            <td className="col-md-9">
                                <QuestionList questions={this.state.q.questions} onSubmitted={this.handleChange}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <Modal show={this.state.testSubmitted}>
                        <Modal.Header  closeButton>
                            <Modal.Title>Score Summary</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Report score={this.state.totalscore} testSubmitted={this.state.testSubmitted}
                                    percentage={Math.round(this.state.totalscore*100/totalPoints)} tpoints={totalPoints}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button >Close</Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            );
        }
        else{
            return(<p>Loading exam...</p>);
        }


    }
});

var QuestionList = React.createClass({
    /*properties
     /questions = list of questions
     /onSubmitted = bool if test has been submitted
     */
    getInitialState: function() {
        return {totalscore : 0};
    },
    handleChange: function(score) {
        this.setState({totalscore: this.state.totalscore + score});
    },
    handleSubmitted: function(event) {
        var result = {totalscore: this.state.totalscore};
        this.props.onSubmitted( result );
        clearInterval(this.interval);
    },


    render: function(){
        var questionAnswers = this.props.questions.map(function(question,i){
            return(
                <tr key={i}><td className="ques">
                    <Question number={question.id} question={question.ques} options={question.options}
                              answer={question.ans} weight={question.weight}
                              onAnswered={this.handleChange}/></td></tr>
            );
        }, this);
        return(
            <div>
                <table className="table">
                    <tbody>{questionAnswers}</tbody></table>
                <div><input type="button" className="btn btn-success btn-lg center-block"
                            value="Submit" onClick={this.handleSubmitted}/></div>
            </div>

        );
    }
});

var Question = React.createClass({
    /*properties
     /question = question
     /number = number of question in list
     /options = array of answers for the question
     /answer = correct answer
     /weight = weight of questions
     /onAnswered = event in QuestionListClass that passes in score
     */

    getInitialState: function() {
        return {
            correctAnswerRecorded: false,
            negativeAnswerRecorded: false,
            tempAnswer:""
        };
    },
    handleChange: function(event) {
        let score = 0;
        this.state.tempAnswer = event.target.value;

        //check if selected answer is correct
        if( event.target.value == this.props.answer) {
            //first response
            if( this.state.correctAnswerRecorded === false ) {
                //keep score the same
                score = this.props.weight;
            }

            this.state.correctAnswerRecorded = true;
            this.state.negativeAnswerRecorded = false;
        } else {
            //deviate from correct
            if( this.state.correctAnswerRecorded === true ) {
                score = -this.props.weight;
            }
            this.state.negativeAnswerRecorded = true;
            this.state.correctAnswerRecorded = false;
        }
        //pass in score to scoreboard exam
        this.props.onAnswered(score);
    },
    render: function(){
        //set input element name
        var qname = "option" + this.props.number;
        //return radio buttons with answers
        var qoptions = this.props.options.map(function(option,i){
            return (
                //display answers of question
                <div key={i}><label for={qname}><input type="radio" name={qname}  value={option.text} onChange={this.handleChange}/>
                    {option.text}</label></div>
            );
        }, this);
        return(
            <div className="list-group-item">
                {/*display questions*/}
                <div><strong>Question {this.props.number}</strong>: {this.props.question}</div>
                {/*display answers*/}
                <div>{qoptions}</div>
                <br/>
                <p>Answer saved: {this.state.tempAnswer}</p>

            </div>
        );
    }
});

var Report = React.createClass({
    /*properties
     /score = summation of weight
     /testSubmitted = bool if test submitted
     /percentage = score/total points points
     /tpoints = total points possible
     */

    render: function(){
        var status = "Test not submitted!";
        if( this.props.testSubmitted == true ) {
            if( this.props.percentage < 70 ) {
                status = "Sorry, you did not pass the test."
            } else {
                status = "Congratulations!! You passed the test.";
            }
        }
        return(
            <div className="list-group">
                <div className="list-group-item list-group-item-success">Score: <strong>{this.props.score} out of {this.props.tpoints}</strong></div>
                <div className="list-group-item list-group-item-info">Percentage: <strong>{this.props.percentage}&nbsp;%</strong></div>
                <div className="list-group-item list-group-item-danger">Status: <strong>{status}</strong></div>
            </div>
        );
    }
});

export default Exam;
