import Header from './components/Header';
import DateSwitch from './components/DateSwitch';
import ProgressListTasks from './components/ProgressListTasks';
import CompletedListTasks from './components/CompletedListTasks';
import Footer from './components/Footer';
import {FaReact} from "react-icons/fa";

import { Component } from 'react';


class App extends Component {
  state = {
    todos : [
      /*
      {
        id: 1,
        task: 'Learn Something',
        status: 'progress'
      }

      */
    ]
  }

  componentDidMount(){

    let data = [];
    if(localStorage.data){
      data = JSON.parse(localStorage.data);
    }
    this.setState({
      todos: data
    })
  }

  InsertTodo = (value) => {
    value.id = Math.floor(Math.random() * (10000 - 1000) + 1000);

    localStorage.data = JSON.stringify([...this.state.todos, value]);

    this.setState({
        todos: [...this.state.todos, value]
    })
  }

  DeleteTodo = (index) => {
    let newState = this.state.todos;
    newState.splice(index, 1)
    
    localStorage.data = JSON.stringify(newState);
    this.setState({
      todos: newState
    })
  }

  CompleteTodo = (index) => {
    let newState = this.state.todos
    newState[index].status = 'completed';

    localStorage.data = JSON.stringify(newState);

    this.setState({
      todos: newState
    })
  }

  ShowTasks = () => {
    return(
      <div>
        <div className="mt-8">
          <p className="text-orange-600 font-semibold">In progress</p>
          <ProgressListTasks todos={this.state.todos} DeleteTodo={this.DeleteTodo} CompleteTodo={this.CompleteTodo}/>
        </div>

        <div className="mt-8">
          <p className="text-green-700 font-semibold">In progress</p>
          <CompletedListTasks todos={this.state.todos} DeleteTodo={this.DeleteTodo}/>
        </div>
      </div>
    )
  }

  InitHtml = () => {
    return(
      <div className="mt-24 text-center text-gray-600 dark:text-gray-400">
        <FaReact className="inline text-9xl"/>
        <div className="text-3xl font-semibold mt-4">React Todo App</div>
        <p>Simple example for todo app</p>
      </div>
    )
  }

  render(){
    return (
      <div className="App h-screen bg-gray-100 dark:bg-gray-900 m-auto lg:h-4/6 ">
        <Header />
  
        <main className="px-6 py-8">
          {/* Datum i switch */}
          <DateSwitch />
          {(this.state.todos.length > 0) ? <this.ShowTasks/> : <this.InitHtml/>}
        </main>
  
        <Footer InsertTodo = {this.InsertTodo} todos={this.state.todos}/>
      </div>
    );
  }
}


export default App;
