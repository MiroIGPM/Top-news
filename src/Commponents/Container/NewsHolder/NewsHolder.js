import React from "react";

//components import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Cockipt from "../../Cockpit/Cockipt";
import TopNews from "../TopNews/TopNews";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";


import FullPost from "../../Articles/SinglePost/FullPost/FullPost";
import Sidedrawer from "../../Cockpit/Sidedrawer/Sidedrawer";

//utils import11
import classes from "./NewsHolder.module.css";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const NewsHolder = (props) => {
    return (
        <Auxiliary>
            <div className={classes["NewsHolder"]}>
                <Cockipt />
                <Sidedrawer />

                <Switch>
                    {/* Index (Top news) route */}

                    <Route exact path="/" component={TopNews} />


                    {/* Single post route */}
                    <Route path={`/news/:id`} component={FullPost} />


                    {/* search route */}
                    <Route path="/search" component={Search} />

                    {/* Categories route */}
                    <Route path="/categories" component={Categories} />
                </Switch>
            </div>
        </Auxiliary>
    );
};

export default connect(null)(NewsHolder);

