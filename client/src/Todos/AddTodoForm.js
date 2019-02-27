import React, { Component } from "react";

class AddTodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      errorMessage: ""
    };
  }

  handleChange = e => {
    e.persist();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  clearInputs = () => {
    this.setState({
      title: "",
      errorMessage: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .addTodo(this.state)
      .then(response => {
        this.clearInputs();
      })
      .catch(err =>
        this.setState({
          errorMessage: err.response.data.message
        })
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add New Todo</h4>

          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            type="text"
            placeholder="Title"
          />

          <button>+</button>
        </form>
        {this.state.errorMessage}
      </div>
    );
  }
}

export default AddTodoForm;
