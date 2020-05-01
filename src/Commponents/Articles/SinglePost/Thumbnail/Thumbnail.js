import React from "react";

//utils import
import classes from "./Thumbnail.module.css";
import { Link } from "react-router-dom";

const Thumbnail = (props) => {
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
                {description == null ? (
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
                    <Link to={`/${id}`}>
                        <p
                            className={[
                                classes["TxtMedium"],
                                classes["Btn"],
                            ].join(" ")}
                        >
                            More
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;
