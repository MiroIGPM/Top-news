import React from "react";

//components import
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Cockipt from "../../Cockpit/Cockipt";
import TopNews from "../TopNews/TopNews";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import FullPost from "../../Articles/SinglePost/FullPost/FullPost";
import Sidedrawer from "../../Cockpit/Sidedrawer/Sidedrawer";
import Error from "../../UI/Error/Error";

//utils import11
import classes from "./NewsHolder.module.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const NewsHolder = (props) => {
    let newsHolder = <Error />;
    if (!props.error) {
        newsHolder = (
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
        );
    }

    return <Auxiliary>{newsHolder}</Auxiliary>;
};

const mapStateToProps = (state) => ({
    error: state.news.error,
});

export default connect(mapStateToProps)(NewsHolder);
