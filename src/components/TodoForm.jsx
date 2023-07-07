import React from "react";
import "./todoForm.css";
import { FaPlus } from "react-icons/fa";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.onChangehandler = this.onChangehandler.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  submithandler(e) {  
    e.preventDefault();
    if (this.state.todo === "") {
      alert("Write Your Task");
    } else {
      this.props.submithandler(this.state.todo);
      this.setState({ todo: "" });
    }
  }
  onChangehandler(e) {
    this.setState({ todo: e.target.value });
  }

  render() {
    return (
      <form className="form" onSubmit={this.submithandler}>
        <input
          type="text"
          className="inputform"
          onChange={this.onChangehandler}
          value={this.state.todo}
        />
     
        <button type="submit" className="btn btn1">
          <FaPlus className="btnlogo" />
        </button>
      </form>
    );
  }
}
export default TodoForm;
