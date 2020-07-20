import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useRouteMatch,
        useParams
} from 'react-router-dom';
import TodoList from './todoList/todoList';
import AntdWrapper from './antd/AntdWrapper';

export default function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/todoList">TodoList</Link>
            </li>
            <li>
              <Link to="/antdWrapper">AntdWrapper</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/todoList">
            <TodoList />
          </Route>
          <Route path="/antdWrapper">
            <AntdWrapper />
          </Route>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// 嵌套路由
function Topics() {
  let match = useRouteMatch();
  
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);