import React from "react";
import "./TodoApp.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Todofilter from "../components/Todofilter";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { TaskName: "React", Status: false },
        { TaskName: "Javascript", Status: false },
        { TaskName: "Basic", Status: true },
        { TaskName: "advance", Status: true },
      ],
      "filter" : "All",
   
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.doneHandler = this.doneHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  componentDidMount() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      this.setState({ data: JSON.parse(storedTodos) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.data));
  }

  submitHandler(e) {
    this.setState((prevState) => ({
      data: [...prevState.data, { TaskName: e, Status: true }],
    }));
  }

  filterHandler(filter) {
    this.setState((prevState) => ({
    data:[...prevState.data],filter : filter
    }));
   
  }

  doneHandler(taskName) {
    this.setState((prevState) => ({
      data: prevState.data.map((todo) => {
        if (todo.TaskName === taskName) {
          return { ...todo, Status: !todo.Status };
        }
        return todo;
      }),
    }));
  }

  /* const prevdata = this.state.data;
    const newarray = [];
    prevdata.map((todos) => {
      todos.TaskName === data
        ? newarray.push({ TaskName: data, Status: !todos.Status })
        : newarray.push(todos);
    });

this.setState({ data: newarray }); 

  deleteHandler(data) {
    const prevdata = this.state.data;
    const newarray = [];
    var done = true;
    prevdata.map((todos) => {
      todos.TaskName === data ? (done = !todos.Status) : newarray.push(todos);
    });

    if (
      done ||
      window.confirm("Task is not completed , you want to delete  the task?")
    ) {
      this.setState({ data: newarray });
    }
  }*/

  deleteHandler(taskName) {

    setInterval(() => {
      this.setState((prevState) => ({
        data: prevState.data.filter((todo) => todo.TaskName !== taskName),
        "filter" : this.state.filter,
     
      }));
    }, 1000);
    
    
  }
  

  render() {
    const data = this.state.data;
    const filter = this.state.filter;
    return (
      <div className="main">
        <h2>Nayan Todo List</h2>
        <div className="input">
        <TodoForm submithandler={this.submitHandler} />
        <Todofilter filterHandler={this.filterHandler}/>
        </div>
      
        <TodoList
          data={data}
          filter = {filter}
          donehandler={this.doneHandler}
          deletehandler={this.deleteHandler}
        
        />
      </div>
    );
  }
}
export default TodoApp;
