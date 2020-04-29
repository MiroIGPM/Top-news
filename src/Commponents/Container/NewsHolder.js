import React, { Component } from 'react'

//components import
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Cockipt from '../Cockpit/Cockipt'
import TopArticles from '../Articles/TopArticles/TopArticles'

//utils import
import classes from './NewsHolder.module.css'
import axios from 'axios'
import { Route } from 'react-router-dom'

 class NewsHolder extends Component {
    constructor(props){
        super(props)

        this.state = {
            topNews: [],
            totalResults: null,
            activeCountry: "GB",
            loading: false
        }
    }

    //initial fetch data
    componentDidMount(){
        this.fetchData(this.state.activeCountry)
    }

    // fetch data function
    fetchData = (country) =>{
        this.setState({loading: true})
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=185cffc9ba164d9ba9029e9106d9b4c7`)
        .then(res => {
            this.setState({totalResults: res.data.totalResults,topNews: res.data.articles, loading: false})
        })
        .catch(err => console.log(err))
    }

    //change country function
    changeCountryHandler = (e) =>{ 
        this.fetchData(e.target.textContent)
        this.setState({activeCountry: e.target.textContent})
    }


    render() {
        return (
            <Auxiliary>
                <div className={classes["NewsHolder"]}>
                    <Cockipt changeCoutry={this.changeCountryHandler}/>
                    <Route exact path="/" render={() =>{return <TopArticles 
                        topNews={this.state.topNews} 
                        loading={this.state.loading} 
                        activeCountry={this.state.activeCountry}/>}}/>
                    <Route path="/search" render={()=>{return <h1>TEST</h1>}}/>
                </div>
            </Auxiliary>
        )
    }
}

export default NewsHolder