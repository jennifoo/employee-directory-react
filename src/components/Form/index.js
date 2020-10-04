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
    results: [],
    isToggleOn: true,
    ascending: [],
    descending: []
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
    let employeeSort = employees.results.sort((a, b) => {
      return a.name.first.localeCompare(b.name.first);
    })
    //
    // this.setState({ ascending: employeeSort })
    // this.setState({ descending: employeeSort.reverse() })

    this.setState({ results: employeeSort })

        // if (this.state.isToggleOn = true) {
        //   this.setState({ results: employeeSort })
        // } else {
        //   this.setState({ results: employeeSort.reverse() })
        // }

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
    // if (this.state.isToggleOn) {
    //   this.setState({ results: this.state.ascending })
    // } else {
    //   this.setState({ results: this.state.descending })
    // }

    // if (this.state.isToggleOn) {
    //   this.setState({ results: this.state.results })
    // } else {
    //   this.setState({ results: this.state.results.reverse() })
    // }
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
