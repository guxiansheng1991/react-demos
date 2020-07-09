import React from 'react';
class AddTodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputValue: ''
        };
    }

    componentDidMount() {
        this.setState({
            inputValue: ''
        });
        // 用户按下enter时, 就是完成更改的时机
        document.addEventListener('keydown', (e) => {
            const isChange = e.target.getAttribute('ischange');
            // 新增
            if (e.keyCode === 13 && isChange === '0') {
                const val = e.target.value;
                if (val) {
                    this.props.handleAdd(val, -1);
                    e.target.value = '';
                    this.setState({
                        inputValue: ''
                    });
                }
            }
        });
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
        // this.props.handleAdd(e.target.value, -1);
    }

    render() {
        return (
            <div>
                <div className="todo-item">
                    <div className="todo-item-con">
                        <div className="todo-input">
                            <input type="text" value={this.state.inputValue} onChange={this.handleChange} ischange='0' placeholder="请输入待办事项" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTodoItem;