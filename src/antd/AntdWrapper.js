import React from 'react';
import {BrowserRouter as Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';
import 'antd/dist/antd.css';
import Quick from './Quick.js';

function AntdWrapper() {
    let match = useRouteMatch();
    return (
        <div>
            <h2>Ant Design</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/quick`}>quick</Link>
                </li>
            </ul>

            <hr />
            <Switch>
                <Route path={`${match.url}/quick`}>
                    <Quick />
                </Route>
            </Switch>
        </div>
    );
}

export default AntdWrapper;