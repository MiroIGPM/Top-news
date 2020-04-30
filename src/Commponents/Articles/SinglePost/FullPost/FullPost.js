import React from "react";

//utils import
import classes from "./FullPost.module.css";
import { withRouter } from "react-router-dom";

const FullPost = (props) => {
    let fullPost = null;

    // populating the fullPostTest with the matching news
    props.topNews.map((news) => {
        if (news.id === props.match.params.id) {
            fullPost = news;
        }
        return fullPost;
    });

    // let render = null;
    // if (fullPost === null) {
    //     render = <p>SOmething went wrong</p>;
    // } else {
    //     render = (
    //         <div>
    //             <div>
    //                 <h1>{fullPost.title}</h1>
    //             </div>
    //             <div>
    //                 <img src={fullPost.urlToImage} alt="full post news"></img>
    //             </div>
    //             <div>
    //                 <p>{fullPost.content}</p>
    //             </div>
    //             <div>
    //                 <p>Back</p>
    //             </div>
    //         </div>
    //     );
    // }

    // return <div>{render}</div>;
    return (
        <div className={classes["FullPost"]}>
            <h1 className={classes["Title"]}>{fullPost.title}</h1>
            <div className={classes["ImgContainer"]}>
                <img src={fullPost.urlToImage} alt="Article"></img>
            </div>
            <div className={classes["Content"]}>
                <p>{fullPost.content}</p>
            </div>
            <div className={classes["BtnHolder"]}>
                <p className={classes["Btn"]}>Back to list</p>
            </div>
        </div>
    );
};

export default withRouter(FullPost);
