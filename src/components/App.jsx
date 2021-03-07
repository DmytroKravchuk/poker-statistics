import React from 'react';
import { Provider } from "react-redux";
import configureStore from "@redux/store";

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <div>!!!</div>
            </div>
        </Provider>
    )
}

export default App;