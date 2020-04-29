import React, { Component } from 'react'

//components import
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Cockipt from '../Cockpit/Cockipt'
import Articles from '../Articles/Articles'

//utils import
import classes from './NewsHolder.module.css'
import axios from 'axios'

 class NewsHolder extends Component {
    constructor(props){
        super(props)

        this.state = {
            topNews: [],
            totalResults: null,
            activeCountry: "US",
            loading: false
        }
    }

    //initial fetch data
    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(){

    }

    // fetch data function
    fetchData = () =>{
        this.setState({loading: true})
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.state.activeCountry}&apiKey=185cffc9ba164d9ba9029e9106d9b4c7`)
        .then(res => {
            this.setState({totalResults: res.data.totalResults,topNews: res.data.articles, loading: false})
        })
        .catch(err => console.log(err))
    }

    //change country function
    changeCountryHandler = (e) =>{
        this.setState({activeCountry: e.target.textContent})
    }

    render() {
        return (
            <Auxiliary>
                <div className={classes["NewsHolder"]}>
                    <Cockipt changeCoutry={this.changeCountryHandler}/>
                    <Articles topNews={this.state.topNews} loading={this.state.loading}/>
                </div>
            </Auxiliary>
        )
    }
}

export default NewsHolder