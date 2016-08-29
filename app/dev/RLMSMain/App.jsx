import React from 'react'
import NavLink from './NavLink.jsx'
import Header from './header.jsx'
import footer from './footer.jsx'
import Footer from "./footer.jsx";

export default React.createClass({
    render() {
        const left = {
            paddingTop: '0px',
            position: 'fixed',
            textAlign: 'center',
            float: 'left',
            width: '20%',
            height: '1080px'
        };
        const right = {
            float: 'right',
            width: '70%'
        };
        return (
            <div>
                <Header/>
                <div className="container" style={containerFix}>
                    <div style={left} className="well">
                        <ul role="nav">
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/user">User</NavLink></li>
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