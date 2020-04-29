import React from 'react'

//commponents import
import SinglePost from './SinglePost/SinglePost'

//utils import
import classes from './Articles.module.css'

 const Articles = (props) => {
    
    const { topNews } = props

    // maping over fetched data
    const topNewsArticles = topNews.map(article =>{
        const { title, urlToImage, description } = article
        return (
            <SinglePost 
            title={title}  
            urlToImage={urlToImage}
            description={description}
            />
        )
    })
    

    // console.log("props", title, urlToImage, description)

    return (
        <div className={classes["Articles"]}>
            {topNewsArticles}
        </div>
    )
}

export default Articles