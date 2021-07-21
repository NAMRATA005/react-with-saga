import React from "react";
import { connect } from 'react-redux';
import { addTask } from '../store/actions';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            task : ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted");
        this.props.addTask(this.state.task);
    }
    render(){
        const {task} = this.state;
        return(
           <div>
                <h1>Enter Todo Here : </h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={task} name="task" onChange={this.handleChange}/>
                    <button type="submit">enter</button>
                </form>
           </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
	addTask: (todo) => dispatch(addTask(todo))
});

// export default TodoForm;
export default connect(null, mapDispatchToProps)(TodoForm);