import TodoItem from "./TodoItem";
import React from "react";
import "./todolist.css";
class TodoList extends React.Component {
  render() {
    var data = this.props.data;
    const filter = this.props.filter ; 

    if (filter === "complete") {
      data = data.filter((todo) => todo.Status === false);
    } else if (filter === "incomplete") {
      data = data.filter((todo) => todo.Status === true);
    }


    return (
      <div className="todolist">




        { 
          data.map((todos, index) => {
              return (
                <TodoItem
                  todos={todos}
                  key={index}
                  donehandler={this.props.donehandler}
                  deletehandler={this.props.deletehandler}
                 
                />
              );
            })
        }
      </div>
    );
  }
}
export default TodoList;
