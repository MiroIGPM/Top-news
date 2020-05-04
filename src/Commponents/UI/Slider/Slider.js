import React, { useState } from "react";

import ThumbnailSlide from "../../Articles/SinglePost/ThumbnailSlide/ThumbnailSlide";

import "./Slider.css";
import { Link, withRouter } from "react-router-dom";
<<<<<<< HEAD
import { connect } from "react-redux";
import { setActiveCategory } from "../../../actions/newsActions";
=======
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537

const Slider = (props) => {
    const [x, setX] = useState(0);
    const [slice, setSlice] = useState(5);

    const news = props.categoryNews.slice(0, slice);

    const showAll = () => {
        let sliceIndex = -1;
        if (slice < 0) {
            sliceIndex = 5;
<<<<<<< HEAD
            setX(0);
=======
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
        }
        setSlice(sliceIndex);
    };

    let screenWidth = window.innerWidth;

    const previous = () => {
        setX(x + 100);
    };

    const next = () => {
        setX(x - 100);
    };

    let disabled = (news.length - 1) * -100;
    if (screenWidth < 900) {
        disabled = (news.length - 2) * -100;
    } else if (screenWidth > 900) {
        disabled = (news.length - 3) * -100;
    }
    const slides = news.map((slide) => {
        const { id, title, urlToImage, description } = slide;
        console.log(screenWidth);
        return (
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
                <ThumbnailSlide
                    key={id}
                    id={id}
                    title={title}
                    urlToImage={urlToImage}
                    description={description}
                />
            </div>
        );
    });

    return (
        <div className="slider-holder">
<<<<<<< HEAD
            <div className="link-holder">
                <Link
                    to={{
                        pathname: "/",
                        state: { from: props.location.pathname },
                    }}
                >
                    <p className="subtite" onClick={props.setActiveCategory}>
                        {props.category}
                    </p>
                </Link>
                <i
                    className="fa fa-expand"
                    aria-hidden="true"
                    onClick={showAll}
                ></i>
            </div>

=======
            <Link
                to={{
                    pathname: "/",
                    state: { from: props.location.pathname },
                }}
            >
                <p className="subtite" onClick={props.clicked}>
                    {props.category}
                    <i
                        class="fa fa-expand"
                        aria-hidden="true"
                        onClick={showAll}
                    ></i>
                </p>
            </Link>
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
            <div className="slider">{slides}</div>
            <button
                id="left"
                className="btn"
                onClick={previous}
                disabled={x === 0}
            >
                <i class="fas fa-angle-left"></i>
            </button>
            <button
                id="right"
                className="btn"
                onClick={next}
                disabled={x === disabled}
            >
                <i class="fas fa-angle-right"></i>
            </button>
        </div>
    );
};

<<<<<<< HEAD
const mapStateToProps = (state) => ({
    loading: state.news.loading,
});

export default connect(mapStateToProps, { setActiveCategory })(
    withRouter(Slider)
);
=======
export default withRouter(Slider);
>>>>>>> 7f8afe59c9822338cf3509dd2517dae1d2fd5537
