import React from 'react';

class BatchManagement extends React.Component {
  render() {
    return (
      <header id="batch-header" style={{padding: 20}}>
        <h1>Batch Assignment</h1>
      </header>
      <form id="batch-update" method="POST">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <section id="user-selection" style={{display: 'inline-block', float: 'left'}}>
                <article id="student-selection">
                  <div style={{padding: 10}}>
                    <h3>Available Students</h3>
                    <div className="input-group">
                      <div className="input-group-addon">Filter Students:</div>
                      <input className="form-control" id="filterStudents" type="text" onkeypress="sFilter()" />
                    </div>
                    <ul id="student-list" />
                  </div>
                </article>
                <article id="trainer-selection">
                  <div style={{padding: 10}}>
                    <h3>Available Trainers</h3>
                    <div className="input-group">
                      <div className="input-group-addon">Filter Trainers:</div>
                      <input className="form-control" id="filterTrainers" type="text" onkeypress="tFilter()" />
                    </div>
                    <ul id="trainer-list" />
                  </div>
                </article>
              </section>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <aside id="batch-selection" style={{display: 'inline-block', float: 'left'}}>
                <div style={{padding: 10}}>
                  <h3>Available Batches</h3>
                  <div className="input-group">
                    <div className="input-group-addon">Filter Batches:</div>
                    <input className="form-control" type="text" onkeypress="bFilter()" />
                  </div>
                  <div id="batch-selector" style={{padding: 8, fontSize: 16}}>
                  </div>
                </div>
              </aside>
            </div>
            <div style={{clear: 'both'}} />
          </div>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4" style={{display: 'inline-block', float: 'left', paddingTop: 15, paddingLeft: 15}}>
          <input id="subBatchForm" className="btn btn-primary btn-md" type="submit" data-toggle="tooltip" style={{}} title="Confirms the current selection for Students, Trainer, and Batch." defaultValue="Confirm Batch Selections" />
        </div>
      </form>
      <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4" style={{display: 'inline-block', float: 'left', paddingTop: 15}}>
        <button className="btn btn-warning btn-md" title="Opens a modal to create a new Batch.">Create New
          Batch</button>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4" style={{display: 'inline-block', float: 'left', paddingTop: 15, paddingBottom: 15}}>
        <button className="btn btn-danger btn-md" title="Cancel batch creation and return to the homepage.">Cancel</button>
      </div>
    );
  }
}

export default BatchManagement
