import React from 'react';
import {render} from 'react-dom';

class Profile extends React.Component{
    render (){
        const hr = {
            borderTop: '1px solid grey'
        }
        const left = {
            float:'left'
        }
        return (
            <div>
                <div className="col-sm-2">
                    <label>Your Profile</label>
                    <br/>
                </div>
                <br/><br/>
                <form className="form-horizontal" role="form">

                    <div className="form-group">

                        <label className="col-lg-2 control-label">First Name:</label>
                         <div className="col-lg-3">
                            <input className="form-control" defaultValue="" type="text"/>
                        </div>


                        <label className="col-lg-2 control-label">Last name:</label>
                        <div className="col-lg-3">
                            <input className="form-control" defaultValue="" type="text"/>
                        </div>
                    </div>


                    <div className="form-group">

                        <label className="col-lg-2 control-label">Username:</label>
                        <div className="col-lg-3">
                            <input className="form-control" defaultValue="" type="text"/>
                        </div>

                        <label className="col-lg-2 control-label">Email:</label>
                        <div className="col-lg-3">
                            <input className="form-control" defaultValue="" type="text"/>
                        </div>
                    </div>


                    <div className="col-lg-1 col-lg-offset-9">
                        <button className="btn btn-success">Update Info</button>
                    </div>
                </form>
                <br/>
                <hr style={hr}/>
                <br/>
                <div>
                    <div className="col-sm-2">
                        <label>Password</label>

                    </div>
                    <br/>
                    <br/>
                    <form className="form-horizontal" role="form">

                        <div className="form-group">

                            <label className="col-lg-2 control-label">New Password</label>
                            <div className="col-lg-3">
                                <input className="form-control" defaultValue="" type="password"/>
                            </div>
                            <label className="col-lg-3 control-label">Re-enter Password</label>
                            <div className="col-lg-3">
                                <input className="form-control" defaultValue="" type="password"/>
                            </div>
                        </div>
                        <div className="col-lg-1 col-lg-offset-9">
                            <button className="btn btn-success">Change Password</button>
                        </div>
                    </form>
                    <br/>
                    <hr style={hr}/>
                </div>
                <div>
                    <div className="col-sm-4 col-md-offset-4">
                        <label>Your Training Information</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;