import React from 'react'
import NavLink from './NavLink.jsx'
export default class Home extends React.Component{
    render() {
        const left = {
            paddingTop: '0px',
            position: 'fixed',
            textAlign: 'center',
            float: 'left',
            width: '15%',
            height: '1080px',
        };
        const right = {
            marginTop: '90px',
            float: 'right',
            width: '75%',
            paddingBottom: '40px'

        };
        const containerFix = {
            marginTop: '-20px'
        }
        const nav = {
            paddingTop: '90px',
            paddingLeft: '0px',
            listStyleType: 'none'

        }
        return (
            ///////////////////////////////////////
            //for new routes
            //<NavLink to="/newRouteRef" className="list-group-item">Button Text</NavLink>
            //add to the list below
            ////////////////////////////////////////
            <div className="container" style={containerFix}>
                <div style={left} className="well">
                    <div role="nav" className="list-group" style={nav}>

                        <NavLink to="/user" className="list-group-item">User</NavLink>
                        <NavLink to="/repo" className="list-group-item">Repo</NavLink>
                        <NavLink to="/home/Forum" className="list-group-item">Forum</NavLink>
                        <NavLink to="/home/exam" className="list-group-item">Exam</NavLink>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <NavLink to="/delete" className="list-group-item">Logout</NavLink>
                    </div>
                </div>
                <div style={right} className="well">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
