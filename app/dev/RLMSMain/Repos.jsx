import React from 'react'

export default React.createClass({
    //required for routing with a on click function
    ///////////////////////////////////////////////
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    test : function(){
        this.context.router.push('/#/home');
    },
    /////////////////////////////////////////////////

    render() {
        return (
            <div>
                <button onClick={this.test} className="btn">testing</button>
            </div>
        )
    }
})
