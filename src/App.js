import React, { Component } from "react";

// Components import
import Layout from "./hoc/Layout/Layout";
import NewsHolder from "./Commponents/Container/NewsHolder/NewsHolder";

//utils import
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Layout>
                        <Router>
                            <NewsHolder />
                        </Router>
                    </Layout>
                </div>
            </Provider>
        );
    }
}

export default App;
