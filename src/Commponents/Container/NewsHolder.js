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
            totalResults: null
        }
    }

    //initial fetch data
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=185cffc9ba164d9ba9029e9106d9b4c7')
        .then(res => {
            this.setState({totalResults: res.data.totalResults,topNews: res.data.articles})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Auxiliary>
                <div className={classes["NewsHolder"]}>
                    <Cockipt />
                    <Articles topNews={this.state.topNews}/>
                </div>
            </Auxiliary>
        )
    }
}

export default NewsHolder