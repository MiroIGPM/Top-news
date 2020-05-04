import React, { useEffect } from "react";

import Error from "../../../UI/Error/Error";

//utils import
import classes from "./FullPost.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleButtonActive } from "../../../../actions/newsActions";

const FullPost = (props) => {
    // Destructuring props
    const { toggleButtonActive, topNews } = props;

    // Setting disable country selection button true on load
    useEffect(() => {
        toggleButtonActive(true);
    }, []);

    // Setting disable country selection button to false on unload
    useEffect(() => {
        return () => {
            toggleButtonActive(false);
        };
    }, []);

    let fullPost = null;

    // populating the fullPostTest with the matching news
    topNews.map((news) => {
        if (news.id === props.match.params.id) {
            fullPost = news;
        }
        return fullPost;
    });

    // go back to previous url location
    const goBack = () => {
        props.history.goBack();
    };

    let render = null;
    if (fullPost === null) {
        render = <Error />;
    } else {
        render = (
            <div className={classes["FullPost"]}>
                <h1 className={classes["Title"]}>{fullPost.title}</h1>
                <div className={classes["ImgContainer"]}>
                    <img src={fullPost.urlToImage} alt="Article"></img>
                </div>
                <div className={classes["Content"]}>
                    <p>{fullPost.content}</p>
                </div>
                <div onClick={goBack} className={classes["BtnHolder"]}>
                    <p className={classes["Btn"]}>
                        <i
                            style={{ marginLeft: "5px" }}
                            className="fas fa-angle-left"
                        ></i>
                        Back to list
                    </p>
                </div>
            </div>
        );
    }

    return <div>{render}</div>;
};

// Importing state from newsReducer
const mapStateToProps = (state) => ({
    topNews: state.news.topNews,
});

export default connect(mapStateToProps, { toggleButtonActive })(
    withRouter(FullPost)
);
