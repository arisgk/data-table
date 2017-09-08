import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class UserDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      age: '',
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {

  }

  handleClose() {

  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        onClick={this.handleAdd}
      />,
    ];

    return (
      <Dialog
        title="Create User"
        actions={actions}
        modal={false}
        open={adding}
        onRequestClose={this.handleClose}
      />
    );
  }
}
