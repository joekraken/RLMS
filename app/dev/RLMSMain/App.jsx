import React from 'react'
import NavLink from './NavLink.jsx'
import Header from './header.jsx'
import Footer from "./footer.jsx";

export default React.createClass({
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
            paddingBottom:'40px'

        };
        const containerFix = {
            marginTop:'-20px'
        }
        const nav = {
            paddingTop:'90px',
            paddingLeft:'0px',
            listStyleType: 'none'

        }
        return (
            <div>
                <Header/>
                <div className="container" style={containerFix}>
                    <div style={left} className="well">
                        <div role="nav" className="list-group" style={nav}>
                            <NavLink to="/home" className="list-group-item">Home</NavLink>
                            <NavLink to="/user"className="list-group-item">User</NavLink>
                            <NavLink to="/repo"className="list-group-item">Repo</NavLink>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <NavLink to="/home" className="list-group-item">Logout</NavLink>
                        </div>
                    </div>
                    <div style={right} className="well">
                        {this.props.children}
                    </div>
                </div>

                <Footer/>
            </div>


        )
    }
})
//<li><NavLink to="/repos">Repos</NavLink></li>