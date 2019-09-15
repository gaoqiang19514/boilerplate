import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      userName: "",
      items: [{ id: uuid(), name: uuid() }, { id: uuid(), name: uuid() }]
    };
  }

  componentDidMount() {
    this.props.loadData();
  }

  async loadUserName() {
    try {
      const data = await axios.get("/api/getUserName");
      this.setState({ userName: data });
      return data
    } catch (err) {}
  }

  handleClick() {
    const { items } = this.state;
    const newItem = { id: uuid(), name: uuid() };
    this.setState({
      items: [...items, newItem]
    });
  }

  render() {
    const { userName, items } = this.state;
    return (
      <div>
        <h1>List</h1>
        <p className="username">{userName}</p>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <button type="button" onClick={this.handleClick}>
          ADD
        </button>
      </div>
    );
  }
}

export default List;
