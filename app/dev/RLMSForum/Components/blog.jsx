import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import NewComment from './newComment.jsx';

var posts=[];
export default class Blog extends React.Component{
    constructor()
    {
        super();
        this.state={};

    }
    doStuff(stuff){
        var posts = this.state.data[0].posts;
        var newPost = {
            username: "[placeholder]",
            comment: stuff
        };
        posts.unshift(newPost);
         var x = this.state.data[0].posts;
        console.log(posts);
        Request.post('http://localhost:3000/postForum').send(this.state.data[0]).end(function(err,res){
            if(err){console.log(err)}
            else{console.log(res.text)}
        });
        this.forceUpdate();

    }

    componentWillMount(){
        var url = 'http://localhost:3000/getForum';
        Request.get(url).then(result =>{

            this.setState({data:JSON.parse(result.text)});
            this.forceUpdate();

        })
    }

    render(){

        if(this.state.data){

            posts = this.state.data[0].posts;
            let blogs = this.state.data.map((item,i) =>
            {
                //console.log(item);
                var comments = item.posts.map((stuff,k) => {
                    return <Comment key = {k} data={stuff}></Comment>
                });
                return(
                    <div className="col-sm-6 col-sm-offset-3 header">

                        <div id="headBar">
                            <h1 className="text-center">{item.batchName}</h1>
                        </div>

                        <hr/>
                        <p className="Desc">{item.description}</p>
                        <NewComment doStuff={this.doStuff.bind(this)}></NewComment>
                        <hr/>
                        {comments}


                    </div>
                )
            });
            console.log(blogs);
            return(
                <div>
                    {blogs}
                </div>
            )
        }else{
            return(
                <p>stuff</p>
            )
        }
    }
}
const Comment = (props) => {

    return (
        <div>
            <div className="row comments">
                <span id="status">
                    <p className="col-sm-6">{props.data.username}</p>
                    <p className="col-sm-6">{props.data.TimeStamp}</p>
                </span>
            </div>


            <p className="col-sm-offset-1">{props.data.comment}</p>
        </div>
    )

}
