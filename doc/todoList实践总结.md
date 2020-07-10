# React 做todoList总结

## 1. 表单相关操作
#### (1) input
- input的值绑定需要为value属性(或者其他属性)绑定变量值, 但是这并不会完成用户输入后组件更新
- input随用户输入更新需要为input的onChange绑定处理函数(处理函数需要绑定this).
```
constructor(props) {
    super(props);
    // 绑定this
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        inputValue: ''
    };
}

handleChange(e) {
    this.setState({
        inputValue: e.target.value
    });
    // this.props.handleAdd(e.target.value, -1);
}

<div className="todo-input">
    <input type="text" value={this.state.inputValue} onChange={this.handleChange} ischange='0' placeholder="请输入待办事项" />
</div>
```
#### (2) checkbox
```
<div className="todo-item-operation">
    <input type="checkbox" checked={this.state.completed} onChange={this.handleSelected} />
</div>
```
## 2. 组件间通信
#### (1) 父到子组件通信
- 使用porps属性即可
- 但是如果在子组件内将props赋值给子组件的state, 那么外层的props修改, 子组件将不能响应修改, 需要在componentWillReceiveProps声明周期函数中接受更新数据
#### (2) 子到父组件通信
- 调用传入子组件的props方法即可做到
```
// 父组件代码(handleAdd={this.handleAddMethod})
const items = this.state.todoArray.map((item, index) => {
    return <TodoItem key={item.id} todoItem={item} handleAdd={this.handleAddMethod}></TodoItem>
});

// 子组件代码
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
```
#### (3) 子组件之间的通信
- 同级子组件在子组件共同的父组件实现数据修改(子组件A通过父组件props中的回调函数改变父组件中传入子组件B的props参数实现兄弟组件传参)
- 不同层级或者嵌套很深的,使用context对象
- 发布/订阅模式实现

## 3. 组件树上的props和state设置
> 存在问题如下: 由于父组件传入的props不能被子组件修改, 导致子组件内部的一些状态不能灵活修改. 此时, 需要子组件内部自己维护state, 便于子组件内部状态控制.
#### (1) 子组件内部可以将父组件传入的props存到子组件内的state中, 以方便子组件内部状态控制
#### (2) 子组件无法监控父组件props的变化时, 可以使用componentWillReceiveProps来监听父组件变化
#### (3) 子组件内部的state可以当做参数,传递给父组件
```
class TodoItem extends React.Component {
    componentDidMount() {
        /**
        子组件内部可以将父组件传入的props存到子组件内的state中, 以方便子组件内部状态控制
        */
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
                /**
                子组件内部的state可以当做参数,传递给父组件
                */
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
}
```

## 4. 其他难点