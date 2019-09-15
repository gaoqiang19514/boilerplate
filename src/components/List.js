import React, { Component } from "react";
import uuid from "uuid";

class List extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      items: [{ id: uuid(), name: uuid() }, { id: uuid(), name: uuid() }]
    };
  }

  componentDidMount() {
    this.props.loadData();
  }

  handleClick() {
    const { items } = this.state;
    const newItem = { id: uuid(), name: uuid() };
    this.setState({
      items: [...items, newItem]
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>List</h1>
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
