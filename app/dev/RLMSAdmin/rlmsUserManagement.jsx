import React from 'react';

class UserManagement extends React.Component {
  constructor(){
    super();
    this.props = { "users": [
        {
          "username":"DPickles",
          "id":1,
          "is_admin":1,
          "is_active":1,
          "f_name":"Dan",
          "l_name":"Pickles",
          "email":"d.p@gmail.com",
          "batch":{
            "name":null,
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        },
        {
          "username":"BA",
          "id":2,
          "is_admin":1,
          "is_active":1,
          "f_name":"Ben",
          "l_name":"Adams",
          "email":"ben@gmail.com",
          "batch":{
            "name":null,
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        },
        {
          "username":"parker",
          "id":3,
          "is_admin":0,
          "is_active":1,
          "f_name":"Peter",
          "l_name":"Parker",
          "email":"pp@mail.web",
          "batch":{
            "name":null,
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        },
        {
          "username":"tm",
          "id":4,
          "is_admin":1,
          "is_active":0,
          "f_name":"Tony",
          "l_name":"Manning",
          "email":"tm@gmail.com",
          "batch":{
            "name":null,
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        },
        {
          "username":"JD",
          "id":5,
          "is_admin":0,
          "is_active":1,
          "f_name":"John",
          "l_name":"Doe",
          "email":"jd@gmail.com",
          "batch":{
            "name":null,
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        },
        {
          "username":"CF",
          "id":6,
          "is_admin":0,
          "is_active":1,
          "f_name":"Connor",
          "l_name":"Funk",
          "email":"cf@gmail.com",
          "batch":{
            "name":null,
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        },
        {
          "username":null,
          "id":null,
          "is_admin":null,
          "is_active":null,
          "f_name":null,
          "l_name":null,
          "email":null,
          "batch":{
            "name":"Java 100",
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        },
        {
          "username":null,
          "id":null,
          "is_admin":null,
          "is_active":null,
          "f_name":null,
          "l_name":null,
          "email":null,
          "batch":{
            "name":".NET 101",
            "grades":[{
              "score":null,
              "exam":null
            }]
          }
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <header id="modify-header" style={{padding: 20}}>
          <h1>Modify User Status</h1>
        </header>
        <section style={{paddingLeft: 30, paddingRight: 30}}>
          <div id="filters">
            <div className="input-group">
              <div className="input-group-addon">Filter
                Users:</div>
              <input className="form-control" type="text" />
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
              <tbody>
                {/*<tr>*/}
                  {/* hidden will be user id */}
                  {/*
                    <td>{'{'}fn{'}'}</td>
                    <td>{'{'}usn{'}'}</td>
                    <td className="centered"><input type="checkbox" name="admin" /></td>
                    <td className="centered"><input type="checkbox" name="active" defaultChecked /></td>
                    */}
                    {
                      /*let rows = this.state.users.map(user => {
                      return <UserRow users={user} />
                    })*/
                  }
                {/*</tr>*/}
              </tbody></table>
            <input id="modify-user-submit" className="btn btn-primary btn-md" type="submit" defaultValue="Confirm User Modifications" />
          </form>
        </article>
      </div>
    );
  }
}

const UserRow = (props) => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default UserManagement
