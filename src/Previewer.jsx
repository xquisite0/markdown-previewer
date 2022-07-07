import React, { Component } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default class Previewer extends Component {
  render() {
    return (
      <div id="preview">
        <div id="previewer-heading">
          <h2>Previewer</h2>

          <i class="fas fa-expand"></i>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(marked.parse(this.props.value)),
          }}
        ></div>
      </div>
    );
  }
}

// implement logic of full screen button
// implement logic of minimize button
// adjust position of editor and previewer with margin
