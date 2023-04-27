import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import {Provider} from "react-redux";
import {store} from "../redux/store";

class index extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default index;