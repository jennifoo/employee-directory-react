import React, { Component } from "react";
// import API from "../../utils/API";
import employees from "../../utils/employees.json";
import "./style.css";
import Title from "../Title";

class Form extends Component {
  state = {
    search: "",
    results: [],
    matches: []
  };

  // When the component mounts, get a list employees and update this.state.results
  componentDidMount() {
    // API.getEmployeeList()
    //   .then(res => {
    //     this.setState({ results: res.data.results })
    //     // console.log(res.data.results)
    //   })
    //   .catch(err => console.log(err))
    //   // .then(res => console.log(res.data.results))

    this.setState({ results: employees.results })

  }


  // Eileen
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
      value={this.state.search}
      name="search"
      onChange={this.handleInputChange}
      type="text"
    />
    <div>
    {this.state.results.filter(elem => elem.name.first.includes(`${this.state.search}`)).map(filteredName => (
      <li key={filteredName.email}>
        {filteredName.name.first}
      </li>
    ))}
    </div>
    </>
  )
}
}
export default Form;
