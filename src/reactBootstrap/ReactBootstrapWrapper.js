import React from 'react';
import { BrowserRouter as Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom';
import Button from './Button';
import ModalExample from './Modal';
import NavExample from './Nav';
import LayoutExample from './Layout';

function ReactBootstrapWrapper() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>React Bootstrap</h2>
      <ul>
        <li>
          <Link to={`${match.url}/button`}>button</Link>
        </li>
        <li>
          <Link to={`${match.url}/modal`}>modal</Link>
        </li>
        <li>
          <Link to={`${match.url}/nav`}>Nav</Link>
        </li>
        <li>
          <Link to={`${match.url}/layout`}>Layout</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route path={`${match.url}/button`}>
          <Button />
        </Route>
        <Route path={`${match.url}/modal`}>
          <ModalExample />
        </Route>
        <Route path={`${match.url}/nav`}>
          <NavExample />
        </Route>
        <Route path={`${match.url}/layout`}>
          <LayoutExample />
        </Route>
      </Switch>
    </div>
  );
}

export default ReactBootstrapWrapper;