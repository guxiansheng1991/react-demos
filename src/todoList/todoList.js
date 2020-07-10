import './todoList.css';
import React from 'react';
import AddTodoItem from './AddTodoItem';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddMethod = this.handleAddMethod.bind(this);
        this.handleSelectedAll = this.handleSelectedAll.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            todoArray: [],
            selectedAll: false
        };
    }

    handleAddMethod(value, id, completed) {
        if (id === -1) {
            this.setState({
                todoArray: this.state.todoArray.concat([this.add(value)])
            });
        } else {
            const arr = this.state.todoArray.map((item, index) => {
                if (item.id === id) {
                    item.todo = value;
                    item.completed = completed;
                }
                return item;
            });
            this.setState({
                todoArray: arr
            });
        }
    }

    add(value) {
        return {
            id: Date.now(),
            todo: value,
            completed: false
        };
    }

    update(originObj, todo, completed) {
        originObj.todo = todo;
        originObj.completed = completed;
        return originObj;
    }

    handleSelectedAll(e) {
        this.setState({
            selectedAll: e.target.checked
        });
        const arr = this.state.todoArray.map((item) => {
            item.completed = e.target.checked;
            return item;
        });
        this.setState({
            todoArray: arr
        });
    }

    handleDelete() {
        const arr = this.state.todoArray.filter(item => {
            if (item.completed) {
                return false;
            } else {
                return true;
            }
        });
        if (window.confirm('确定删除所选待办事项吗?')) {
            this.setState({
                todoArray: arr,
                selectedAll: false
            });
        }
    }

    render() {
        const items = this.state.todoArray.map((item, index) => {
            return <TodoItem key={item.id} todoItem={item} handleAdd={this.handleAddMethod}></TodoItem>
        });
        return (
            <div className="todos-wrapper">
                <div className="todos-header">
                    <div className="todos-header-title">TodoList</div>
                    <div className="todos-header-operation">
                        <button onClick={this.handleDelete}>delete</button>
                        <input type="checkbox" checked={this.state.selectedAll} onChange={this.handleSelectedAll} />
                    </div>
                </div>
                <div className="todos-body">
                    <div className="todos-item">
                        {items}
                        <AddTodoItem handleAdd={this.handleAddMethod}></AddTodoItem>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;