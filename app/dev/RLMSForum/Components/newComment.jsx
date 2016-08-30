import React from 'react';
import {render} from 'react-dom';

export default class NewComment extends React.Component{

    constructor(){

        super();
        this.state={value:"stuff"};
        this.OnChangeEvent.bind(this);
    }

    OnChangeEvent(e){

        this.setState({value:e.target.value});

    }
    onClick(e){
       this.props.doStuff(this.state.value)
    }

    render(){

        return(
            <div>
                <input type="text" className="form-control" placeholder="comment" ref="stuff" onChange={this.OnChangeEvent.bind(this)}/>
                <p>{this.state.value}</p>
                <button onClick={this.onClick.bind(this)} className="pull-right">Click to submit</button>
            </div>
        )
    }

}
