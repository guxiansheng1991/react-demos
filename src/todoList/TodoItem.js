import React from 'react';
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            inputValue: '',
            completed: true,
            id: ''
        };
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    }

    componentDidMount() {
        const todoItem = this.props.todoItem;
        this.setState({
            inputValue: todoItem.todo,
            completed: todoItem.completed,
            id: todoItem.id
        });
        // 用户按下enter时, 就是完成更改的时机
        document.addEventListener('keydown', (e) => {
            const isChange = e.target.getAttribute('ischange');
            // 修改
            if (e.keyCode === 13 && isChange === '1') {
                const index = Number(e.target.getAttribute('id'));
                this.props.handleAdd(e.target.value, index, this.state.completed);
                this.setState({
                    editing: false
                });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const todoItem = nextProps.todoItem;
        this.setState({
            inputValue: todoItem.todo,
            completed: todoItem.completed,
            id: todoItem.id
        });
    }

    handleDoubleClick(id) {
        this.setState({
            editing: true
        });
        setTimeout(() => {
            const className = `.${id}`;
            document.querySelector(className).focus();
        }, 0);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSelected(e) {
        this.setState({
            completed: e.target.checked
        });
        setTimeout(() => {
            this.props.handleAdd(this.state.inputValue, this.state.id, this.state.completed);
        }, 0);
    }

    render() {
        return (
            <div className="todo-item">
                <div className="todo-item-con" onDoubleClick={this.handleDoubleClick.bind(this, `a${this.state.id}`)}>
                    <div>
                        <div className="todo-input" style={{display: this.state.editing ? 'block' : 'none'}}>
                            <input type="text" className={`a${this.state.id}`} id={this.state.id} value={this.state.inputValue} ischange='1' onChange={this.handleChange} placeholder="请输入待办事项" />
                        </div>
                        <div className="todo-text" style={{display: this.state.editing ? 'none' : 'block'}}>
                            <span>{this.state.inputValue}</span>
                        </div>
                    </div>
                </div>
                <div className="todo-item-operation">
                    <input type="checkbox" checked={this.state.completed} onChange={this.handleSelected} />
                </div>
            </div>
        );
    }
}

export default TodoItem;