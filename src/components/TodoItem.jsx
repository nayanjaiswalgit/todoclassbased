import React from "react";
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./todoItem.css";
class TodoItem extends React.Component {
constructor(props){
  super(props);
this.state = {"delete": false};
this.submitHandler = this.submitHandler.bind(this) ;
}
submitHandler() {
  this.setState({"delete" : true});
  setInterval(() => {
    this.props.deletehandler(this.props.todos.TaskName);
  }, 1000);
  this.setState({"delete" : false});
}
  render() {
    return (
      <div
        className={` todoitem ${this.props.todos.Status ? "":"todoitemdone"}  ${this.state.delete && "deleteanimation" } `}
      >
        <div className="todotask">{this.props.todos.TaskName}</div>
        <div className="  flex ">
          <button className="done logobtn" onClick={()=>this.props.donehandler(this.props.todos.TaskName)}>
            <MdDone className="doneicon" />
          </button>
          <button className="delete logobtn" onClick={this.submitHandler}>
            <MdDelete className="doneicon" />
          </button>
        </div>
      </div>
    );
  }
}
export default TodoItem;
