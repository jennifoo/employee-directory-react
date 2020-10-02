import React, { Component } from "react";
import ".style.css";
import Title from "../Title"

class Form extends Component {
  state = {
    search: ""
  };

  handleInputChange = event => {
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

render() {

  <Title />

}
}

export default Form;
