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
                        <ul role="nav" style={nav}>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <br/>
                            <li><NavLink to="/user">User</NavLink></li>
                            <br/>
                            <li><NavLink to="/repo">Repo</NavLink></li>
                        </ul>
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