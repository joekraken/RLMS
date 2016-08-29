import React from 'react';
import {render} from 'react-dom';
import {Navbar} from 'react-bootstrap';
import { IndexLink , Link } from "react-router";


class Footer extends React.Component{
    render (){
        return (<Navbar fixedBottom>
            <Navbar.Text>
                Copyright © 2016 RLMS
            </Navbar.Text>
        </Navbar>)
    }
}

export default Footer;