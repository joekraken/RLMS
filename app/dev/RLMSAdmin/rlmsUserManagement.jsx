import React from 'react';

class UserManagement extends React.Component {
  render() {
    return (
      <div>
        <header id="modify-header" style={{padding: 20}}>
          <h1>Modify User Status</h1>
        </header>
        <section style={{paddingLeft: 30, paddingRight: 30}}>
          <div id="filters">
            <div style={{}}>
              <div className="input-group">
                <div className="input-group-addon">Filter
                  Users:</div>
                <input className="form-control" type="text" />
              </div>
            </div>
          </div>
        </section>
        <article style={{padding: 20}}>
          <form id="update-user" method="POST">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Full Name</th>
                  <th className="col-lg-4 col-md-4 col-sm-4 col-xs-4">User Name</th>
                  <th className="col-lg-1 col-md-1 col-sm-1 col-xs-1">Admin</th>
                  <th className="col-lg-1 col-md-1 col-sm-1 col-xs-1">Active</th>
                  {/* Set the user's batch? */}
                </tr>
              </thead>
              {/* loop through all users and display them here */}
              <tbody><tr>
                  {/* hidden will be user id */}
                  <td>{'{'}fn{'}'}</td>
                  <td>{'{'}usn{'}'}</td>
                  <td className="centered"><input type="checkbox" name="admin" /></td>
                  <td className="centered"><input type="checkbox" name="active" defaultChecked /></td>
                </tr>
              </tbody></table>
            <input id="modify-user-submit" className="btn btn-primary btn-md" type="submit" defaultValue="Confirm User Modifications" />
          </form>
        </article>
      </div>
    );
  }
}

export default UserManagement
