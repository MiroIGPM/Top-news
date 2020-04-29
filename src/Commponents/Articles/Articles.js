import React from 'react'

//commponents import
import SinglePost from './SinglePost/SinglePost'
import Spinner from '../UI/Spinner/Spinner'

//utils import
import classes from './Articles.module.css'

 const Articles = (props) => {
    
    const { topNews, loading } = props

    let holderClass = "LoaderHolder"
    let topNewsArticles = <Spinner />
    if(!loading){
        // maping over fetched data
        topNewsArticles = topNews.map(article =>{
            const { title, urlToImage, description } = article
            return (
                <SinglePost 
                title={title}  
                urlToImage={urlToImage}
                description={description}
                />
            )
        })
        holderClass = "Articles"
    }



    return (
        <div className={classes[holderClass]}>
            {topNewsArticles}
        </div>
    )
}

export default Articles