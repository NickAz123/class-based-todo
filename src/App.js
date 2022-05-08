import React, { Component } from "react";
import toDoList from "./assets/data";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = toDoList;
  }

  toggleCheck = (i) => {
    this.setState({
      toDoItems: this.state.toDoItems.map((item) => 
        item.body === i.body ? { ...item, complete: !item.completed } : item
      )
    })
  }

  renderToDo = () => {
    return this.state.toDoItems.map((i) => (
      <tr key={i.body}>
        <td>{i.body}</td>
        <td className="text-center">
          <input className="align-middle" type="checkbox" checked={i.done} onChange={() => this.toggleCheck(i)} />
        </td>
      </tr>
    ));
  };

  updateValue = (e) => {
    this.setState({ newToDo: e.target.value });
  };

  createToDo = () => {
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        { body: this.state.newToDo, complete: false },
      ],
      newToDo: "",
    });
  };

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">
            {this.state.userName} To Do List
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <input
            className="form-control"
            value={this.state.newToDo}
            onChange={this.updateValue}
          />
        </div>
        <div className="col-4">
          <button className="btn btn-primary" onClick={this.createToDo}>
            Add
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th className="text-center">Complete</th>
              </tr>
            </thead>
            <tbody>{this.renderToDo()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
