import React, { Component } from "react";

export default class Editor extends Component {
  render() {
    return (
      <div>
        <div id="editor-heading">
          <h2>Editor</h2>

          <i class="fas fa-expand"></i>
        </div>
        <textarea
          id="editor"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
