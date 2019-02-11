import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../presentational/Input.jsx"

class FormContainer extends Component {
  state = {
    title: "Change Me"
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { title } = this.state
    return (
      <form id="item-form" onSubmit={this.handleSubmit}>
        <Input
          text={title}
          label="title"
          type="text"
          id="title"
          value={title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default FormContainer;
