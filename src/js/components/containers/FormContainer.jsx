import React, { Component } from "react"
import ReactDOM from "react-dom"
import { connect } from "react-redux"
import uuidv1 from "uuid"
import { waitASecond } from "App/utils";

import { addItemRequest, addItemResolve } from "Actions"

import Input from "../presentational/Input.jsx"

function mapStateToProps(state) {
    return {
        loading: state.loading
    };
}

function mapDispatchToProps(dispatch) {
  return {
    addItemRequest: () => dispatch(addItemRequest()),
    addItemResolve: item => dispatch(addItemResolve(item))
  };
}

class FormContainer extends Component {
  state = {
    title: "Change Me"
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();

    this.props.addItemRequest();
    waitASecond({ title, id }).then(response => this.props.addItemResolve(response));

    this.setState((state) => {
      return {...state, title: state.title}
    })
  };

  render() {
    const { title } = this.state;
    return (
      <form id="item-form" className="col-md-4 offset-md-1" onSubmit={this.handleSubmit}>
        <fieldset id="create-item-form">
          <legend>Create a new item</legend>
          <Input
            text={title}
            label="title"
            type="text"
            id="title"
            value={title}
            handleChange={this.handleChange}
          />
        </fieldset>
        <button type="submit" className="btn btn-default btn-lg" disabled={this.props.loading}>
          { this.props.loading ? 'Wait...' : 'SAVE' }
        </button>
      </form>
    );
  }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(FormContainer);

export {Form};
