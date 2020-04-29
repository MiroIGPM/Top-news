import React from 'react'

//commponents import
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import SinglePost from '../SinglePost/SinglePost'
import Spinner from '../../UI/Spinner/Spinner'

//utils import
import classes from './TopArticles.module.css'
import { v4 as uuidv4 } from 'uuid';

 const TopArticles = (props) => {
    
    const { topNews, loading, activeCountry } = props

    // Setting up title country 
    let country = ""
    if(activeCountry === "US"){
        country = "United States"
    }else if(activeCountry === "GB"){
        country = "Great Britain"
    }

    let holderClass = "LoaderHolder"
    let topNewsArticles = <Spinner />
    if(!loading){
        // maping over fetched data
        topNewsArticles = topNews.map(article =>{
            const { title, urlToImage, description } = article
            return (
                <SinglePost 
                key={uuidv4()}
                title={title}  
                urlToImage={urlToImage}
                description={description}
                />
            )
        })
        holderClass = "Articles"
    }

    return (
        <Auxiliary>
            <h1>{"Top news from " + country}</h1>
            <div className={classes[holderClass]}>
                {topNewsArticles}
            </div>
        </Auxiliary>
    )
}

export default TopArticles