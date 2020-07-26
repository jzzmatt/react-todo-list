import React from "react";
import Rendertask from "./Rendertask";

class Formtask extends React.Component {
  state = { input: "", tasklist: [] };

  handlingInput = event => {
    this.setState({ input: event.target.value });
  };

  handlingSubmit = event => {
    event.preventDefault();
    let copytasklist = [...this.state.tasklist, this.state.input];
    console.log(copytasklist);
    this.setState({ tasklist: copytasklist });
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlingSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handlingInput}
          />
          <button type="submit">Submit</button>
        </form>

        <Rendertask todolist={this.state.tasklist} />
      </div>
    );
  }
}

export default Formtask;
