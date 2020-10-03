import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import Title from "../Title";

class Form extends Component {
  state = {
    search: "",
    results: []
  };

  // When the component mounts, get a list employees and update this.state.results
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ results: res.data })) // Array of 200 employees
      .catch(err => console.log(err));
      // .then(res => console.log(res.data.results))
  }

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
