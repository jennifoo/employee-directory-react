import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import Title from "../Title";
import Row from "../Row";
import Col from "../Col";

class Form extends Component {
  state = {
    search: "",
    results: [],
    isToggleOn: true
  };

  // When the component mounts, get a list employees and update this.state.results
  componentDidMount() {
    API.getEmployeeList()
      .then(res => {
        let employeeSort = res.data.results.sort((a, b) => {
          return a.name.first.localeCompare(b.name.first);
        })
        this.setState({ results: employeeSort })
      })
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    let search = event.target.name
    let value = event.target.value;

    this.setState({
      [search]: value
    });

  };

  handleToggle = event => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
    this.state.results.reverse()
  };


render() {
  const alternatingColor = ['color-1', 'color2'];
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
        <div className="row row-title">
          <Col size="1">Image</Col>
          <div className={this.state.isToggleOn ? 'col-3 carrot on' : 'col-3 carrot off'} onClick={this.handleToggle}>Name</div>
          <Col size="3">Phone</Col>
          <Col size="3">Email</Col>
          <Col size="2">DOB</Col>
        </div>
        {this.state.results.filter(elem => (elem.name.first + " " + elem.name.last).includes(`${this.state.search}`)).map((filteredName, index) => (
          <Row key={filteredName.email} color={alternatingColor[index % alternatingColor.length]}>
            <Col size="1"><img src={filteredName.picture.thumbnail} alt="employee thumbnail"></img></Col>
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
