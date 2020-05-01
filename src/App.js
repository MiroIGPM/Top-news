import React, { Component } from "react";

// Components import
import Layout from "./hoc/Layout/Layout";
import NewsHolder from "./Commponents/Container/NewsHolder/NewsHolder";

//utils import
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Router>
                        <NewsHolder />
                    </Router>
                </Layout>
            </div>
        );
    }
}

export default App;
