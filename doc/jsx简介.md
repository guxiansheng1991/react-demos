# JSX 简介

## 1. 在 JSX 中嵌入表达式
在jsx中, 大括号中, 可以插入任意的JavaScript表达式, obj.prop或者func()都是表达式.
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

## 2. JSX本身也是表达式
可以在if, for等语句中使用jsx语法
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

```

## 3. JSX设置属性值
JSX中, 属性名都用camelCase(驼峰命名法)来命名, 如className
- (1)可以使用双引号设置字符串字面量值
```
const element = <div tabIndex="0"></div>;
```
- (2)可以使用大括号设置一个JavaScript表达式
```
const element = <img src={user.avatarUrl}></img>;
```

## 4. JSX的基本原理
本质上是React.createElement()方法, 以下两者的效果是一样的
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```