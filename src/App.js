import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItems from "./ListItems.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
      currentItem: {
        text: "",
        key: ""
      }
    });
  }

  setUpdate(value, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = value;
      }
    });
    this.setState({
      items: items
    });
  }
  render() {
    return (
      <div className="App">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            placeholder="Enter a Task"
            type="text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          ></input>
          <button type="submit">+</button>
        </form>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default App;
