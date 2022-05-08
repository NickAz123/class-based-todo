import React, { Component } from "react";

export class ToDoItem extends Component {
  render = () => (
    <tr>
      <td>{this.props.i.body}</td>
      <td className="text-center">
        <input
          className="align-middle"
          type="checkbox"
          checked={this.props.i.done}
          onChange={() => this.props.toggleCheck(this.props.i)}
        />
      </td>
    </tr>
  );
}
