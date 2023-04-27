import React from 'react';
import { connect } from 'react-redux';
import "../components/background.module.css";

import {addTodo} from '../redux/action/addTodo.action';

import TodosList from '../components/TodosList';

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], title: '' , completed: false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  //<TodoList items={this.state.items} /> after <h3>TODO</h3>
    render() {
      return (
        <div style={{backgroundColor: 'purple', width: '100vh', height: '100vh'}}>
          <h3>TODO</h3>
          <TodoList />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo" >
              Title:{' '}
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <div/>
            <button >
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ title: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.title.length === 0) {
        return;
      }
      this.props.addTodo(this.state.title);
      const newItem = {
        title: this.state.title,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        title: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {/*
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      );*/
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    addTodo : todo => dispatch(addTodo(todo))
  })

  export default connect(null, mapDispatchToProps) (TodoApp);