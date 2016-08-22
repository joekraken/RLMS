import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p>Gratuitous greetings, Alex.</p>;
    }
}

render(<App/>, document.getElementById('myApp'));


if (module.hot) {
    module.hot.accept();
}