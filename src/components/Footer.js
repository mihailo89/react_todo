import React, { Component } from 'react';

import { FaPlus } from "react-icons/fa";

class Footer extends Component{

    state = {
        task: '',
        status: 'progress'
    }

    changeAddValue = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    addTask = () => {
        this.props.InsertTodo(this.state);

        this.setState({
            task: ''
        })
    }
    onKeyUp = (event) => {
        if (event.key === "Enter") {
          this.addTask()
        }
    }

    SumTasks = (value) => {
        let todos = this.props.todos
        
        let filter_val = todos.filter((el) => {
            return el.status === value
        })
        return filter_val.length
        
    }

    

    render(){

        // Add new Task functionality Start
        let viewAddField = () => {
            document.querySelector('#add_new_task').classList.remove('hidden');
            document.querySelector('#add_new_task input').focus()
        }
    
        let closeAddField = () => {
            document.querySelector('#add_new_task').classList.add('hidden');
        }
        // Add new Task functionality END


        return(
            <footer className="relative">
                <div id="add_new_task" className="h-20 w-full bg-green-700 p-4 absolute bottom-14 hidden transition ease-in duration-700">
                    <div className="relative">
                    <input onChange={this.changeAddValue} onKeyPress={this.onKeyUp} type="text" className="w-full outline-none pr-2 pl-8 h-10 text-green-700 dark:text-green-500 dark:bg-indigo-200" value={this.state.task} placeholder="Add New Task here..."/>
                    <button onClick={this.addTask} className="bg-transparent text-3xl absolute bottom-1 left-2 text-green-700 focus:outline-none dark:text-green-500">+</button>
                    <button onClick={closeAddField} className="text-2xl absolute bottom-14 right-2 text-gray-700 focus:outline-none">&times;</button>
                    </div>
                </div>
        
                <div className="bg-white flex justify-between items-center dark:bg-indigo-200">
                <div className="text-center px-2.5 py-1.5 ml-4">
                    <div onClick={()=>{this.SumTasks('progress')}} className="text-2xl text-orange-600 dark:text-orange-400">{this.SumTasks('progress')}</div>
                    <div className="text-xs text-orange-400">Tasks to be done</div>
                </div>
                <div className="text-center px-2.5 py-1.5">
                    <div className="text-2xl  text-green-700 dark:text-green-500">{this.SumTasks('completed')}</div>
                    <div className="text-xs text-green-500">Tasks completed</div>
                </div>
                <div onClick={viewAddField} className="text-center px-2.5 py-1.5 bg-green-700 text-white cursor-pointer">
                    <div className="text-2xl">
                        <FaPlus className="inline mb-1"/>
                    </div>            
                    <div className="text-xs">Add New Task</div>
                </div>
                </div>
          </footer>
        )
    }
}

export default Footer;