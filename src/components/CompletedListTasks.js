import React from 'react';

import { FaCheck, FaTimesCircle } from "react-icons/fa";


const CompletedListTasks = ({todos, DeleteTodo}) => {
    const CompletedListTask = todos.map((todo, index) => {
        if (todo.status === 'completed'){
            return(
                <div className="taskbox mt-3 flex justify-between items-center p-2.5 bg-white shadow-md dark:bg-indigo-200" key={index}>
                    <div className="flex items-center space-x-2">
                    <FaCheck className="text-green-500 text-lg" />
                    <div className="text-gray-600 dark:text-gray-300">{todo.task}</div>
                    </div>
                    <div className="cta-btn">
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
            {CompletedListTask}
        </div>
    );
}


export default CompletedListTasks;