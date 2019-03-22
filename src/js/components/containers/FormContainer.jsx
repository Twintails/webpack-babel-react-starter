import React, { Component } from "react"
import ReactDOM from "react-dom"
import { connect } from "react-redux"
import uuidv1 from "uuid"

import { addItem } from "Actions"

import Input from "../presentational/Input.jsx"

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}

class FormContainer extends Component {
  state = {
    title: "Change Me"
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { title } = this.state
    const id = uuidv1()

    this.props.addItem({ title, id })
    this.setState((state) => {
      return {...state, title: state.title}
    })
  }

  render() {
    const { title } = this.state
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
        <button type="submit" className="btn btn-default btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(FormContainer);

export {Form};
