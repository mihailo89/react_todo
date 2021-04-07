import React from 'react';

import { FaBookmark, FaCheckCircle, FaTimesCircle } from "react-icons/fa";


const ProgressListTasks = ({todos, DeleteTodo, CompleteTodo}) => {
    const ProgressListTask = todos.map((todo, index) => {
        if (todo.status === 'progress'){
            return(
                <div className="taskbox mt-3 flex justify-between items-center p-2.5 bg-white shadow-md dark:bg-indigo-200" key={index}>
                    <div className="flex items-center space-x-2">
                    <FaBookmark className="text-orange-400"/>
                    <div className="text-gray-600 dark:text-gray-300">{todo.task}</div>
                    </div>
                    <div className="cta-btn">
                        <FaCheckCircle onClick={()=>{CompleteTodo(index)}} className="inline text-xl text-green-700 dark:text-green-500 mr-2 cursor-pointer" title="Check this task"/>
                        <FaTimesCircle onClick={()=>{DeleteTodo(index)}} className="inline text-red-500 text-xl cursor-pointer" title="Delete this task" />
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    })

    return (
        <div>
            {ProgressListTask}
        </div>
    );
}


export default ProgressListTasks;