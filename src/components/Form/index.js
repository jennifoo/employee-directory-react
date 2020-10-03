import React, { Component } from "react";
// import API from "../../utils/API";
import employees from "../../utils/employees.json";
import "./style.css";
import Title from "../Title";
import Row from "../Row";
import Col from "../Col";

class Form extends Component {
  state = {
    search: "",
    results: []
    // matches: []
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
    <div className="container-fluid">
    <input
      value={this.state.search}
      name="search"
      onChange={this.handleInputChange}
      type="text"
      placeholder="Search"
    />
    <main>
        <Row>
          <Col size="1">Image</Col>
          <Col size="3">Name</Col>
          <Col size="3">Phone</Col>
          <Col size="3">Email</Col>
          <Col size="2">DOB</Col>
        </Row>
        {this.state.results.filter(elem => (elem.name.first + " " + elem.name.last).includes(`${this.state.search}`)).map(filteredName => (
          <Row key={filteredName.email}>
            <Col size="1"><img src={filteredName.picture.thumbnail}></img></Col>
            <Col size="3">{`${filteredName.name.first} ${filteredName.name.last}`}</Col>
            <Col size="3">{filteredName.phone}</Col>
            <Col size="3">{filteredName.email}</Col>
            <Col size="2">{filteredName.dob.date.substring(0,10)}</Col>
          </Row>
        ))}
    </main>
    </div>
    </>
  )
}
}
export default Form;

// "picture":{"large":"https://randomuser.me/api/portraits/women/93.jpg",
// "medium":"https://randomuser.me/api/portraits/med/women/93.jpg",
// "thumbnail":"https://randomuser.me/api/portraits/thumb/women/93.jpg"},"nat":"US"},
// "name":{"title":"Miss","first":"Eileen","last":"Harvey"},
// "phone":"(744)-274-9277",
// "email":"eileen.harvey@example.com",
// "dob":{"date":"1990-02-19T16:55:06.715Z","age":30},
