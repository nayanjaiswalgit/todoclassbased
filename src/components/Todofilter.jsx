import React from "react"
import "./todofilter.css"
import { FaFilter } from "react-icons/fa";
class Todofilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type:"All"
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    changeHandler(e){
        
        this.setState({type:e.target.value})
      
    }
    submitHandler(){

        this.props.filterHandler(this.state.type);
    }
    render(){
        return(

            <div className="filter" > 
           
            <select id = "type" name="type" className="dropdown" onChange={this.changeHandler}>
                <option value="All" >All</option> 
                <option value="complete" >complete</option> 
                <option value="incomplete" >incomplete</option> 
            </select>
           
           <button type="submit" className="btn btn1 btnab" onClick={this.submitHandler}>
          <FaFilter className="btnlogo" />
        </button>
            </div>

        )
    }
}
export default Todofilter