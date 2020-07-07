# State 简介
state是私有的, 存在于class声明的组件中, 使得组件有状态.

## 1. state修改
- (1) 不能直接修改state的值, 应该调用setState方法
```
// 此种方式不会生效
this.state.comment = 'Hello';

// 正确的方式
this.setState({comment: 'Hello'});
```
- (2) state的更新是异步的
setState方法接受一个函数来解决异步更新的问题, 第一个参数是上一个state的状态, 第二个参数props
```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
- (3) state的更新是被合并的
类似于Object.assign方法

## 2. 组件的数据流是向下的
类似于树形结构, 组件的数据是向下流动的.