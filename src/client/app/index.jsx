import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p>Gratuitous greetings, world!</p>;
    }
}

render(<App/>, document.getElementById('myApp'));