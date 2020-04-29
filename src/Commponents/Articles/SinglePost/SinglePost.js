import React from 'react'

//utils import
import classes from './SinglePost.module.css'

 const SinglePost = (props) => {
     
    const { title, urlToImage, description } = props 

    return (
        <div className={classes["SinglePost"]}>
            <div>
                <h3>{title}</h3>
                <div className={classes["SinglePost__img"]}>
                    <img src={urlToImage} alt="news thumbnail"></img>
                </div>
                <div><p>{description}</p></div>
                <div className={classes["SinglePost__button"]}>
                    <button>More</button>
                </div>
            </div>    
        </div>
    )
}

export default SinglePost