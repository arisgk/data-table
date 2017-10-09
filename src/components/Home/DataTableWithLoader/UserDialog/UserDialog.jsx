import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class UserDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      age: '',
    };

    this.validate = this.validate.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      firstName: '',
      lastName: '',
      age: '',
    });
  }

  onKeyUp(event) {
    const { adding } = this.props;

    if (event.which === 13 && this.validate()) {
      if (adding) {
        this.handleAdd();
      }
    }
  }

  validate() {
    return (this.state.firstName && this.state.lastName && validator.isInt(this.state.age));
  }

  handleAdd() {
    const { mutate } = this.props;
    mutate(this.state);
    this.handleClose();
  }

  handleClose() {
    const { onCancel } = this.props;
    onCancel();
  }

  handleTextFieldChange(event, name) {
    const value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  render() {
    const { adding } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        secondary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Create"
        primary
        onClick={this.handleAdd}
        disabled={!this.validate()}
      />,
    ];

    return (
      <Dialog
        title="Create User"
        actions={actions}
        modal={false}
        open={adding}
        onRequestClose={this.handleClose}
      >
        <TextField
          floatingLabelText="First Name"
          fullWidth
          value={this.state.firstName}
          onChange={event => this.handleTextFieldChange(event, 'firstName')}
          onKeyUp={this.onKeyUp}
        />
        <TextField
          floatingLabelText="Last Name"
          fullWidth
          value={this.state.lastName}
          onChange={event => this.handleTextFieldChange(event, 'lastName')}
          onKeyUp={this.onKeyUp}
        />
        <TextField
          floatingLabelText="Age"
          fullWidth
          value={this.state.age}
          onChange={event => this.handleTextFieldChange(event, 'age')}
          onKeyUp={this.onKeyUp}
        />
      </Dialog>
    );
  }
}

UserDialog.propTypes = {
  adding: PropTypes.bool,
  mutate: PropTypes.func,
  onCancel: PropTypes.func,
};

UserDialog.defaultProps = {
  adding: false,
  mutate: () => {},
  onCancel: () => {},
};

export default UserDialog;
