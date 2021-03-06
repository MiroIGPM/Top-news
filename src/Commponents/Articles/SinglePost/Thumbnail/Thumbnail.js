import React from "react";

//utils import
import classes from "./Thumbnail.module.css";
import { Link, withRouter } from "react-router-dom";

const Thumbnail = (props) => {
    // Destructuring props
    const { id, title, urlToImage, description } = props;

    return (
        <div className={classes["Thumbnail"]}>
            <div className={classes["Content"]}>
                <p className={classes["Title"]}>{title}</p>
            </div>
            <div className={classes["ImgContainer"]}>
                <img src={urlToImage} alt="News" />
            </div>
            <div className={classes["Content"]}>
                {/** Seting desc text based on fetch desc length */}
                {description == null || description.length <= 0 ? (
                    <p
                        className={[
                            classes["Description"],
                            classes["TxtMedium"],
                        ].join(" ")}
                    >
                        Sorry, no description.
                    </p>
                ) : (
                    <p
                        className={[
                            classes["Description"],
                            classes["TxtMedium"],
                        ].join(" ")}
                    >
                        <span>Description:</span>
                        {` ${description}`}
                    </p>
                )}
                <div className={classes["BtnHolder"]}>
                    <Link to={`news/${id}`}>
                        <p
                            className={[
                                classes["TxtMedium"],
                                classes["Btn"],
                            ].join(" ")}
                        >
                            More <i className="fas fa-angle-right"></i>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Thumbnail);
