import React, { Component } from "react";
import "./style.css";
import Title from "../Title"

class Form extends Component {
  state = {
    search: ""
  };

  handleInputChange = event => {
    let search = event.target.name
    let value = event.target.value;

    this.setState({
      [search]: value
    });
  };

render() {

  return (
    <>
    <Title />
    <input
      // value={this.state.search}
      name="search"
      onChange={this.handleInputChange}
      type="text"
    />
    </>
  )


}
}

export default Form;
