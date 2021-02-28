import React from 'react';
import { render } from 'react-dom';
import json from './assets/json.json';
import logo from './assets/webpack-logo.png';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import './styles/styles.css';
import './styles/ex.scss';

import '@modules/module';

const App = () => {
    return (
        <div className="App">
            <div>!!!</div>
        </div>
    )
}

render( <App/>, document.getElementById( 'app' ) );
