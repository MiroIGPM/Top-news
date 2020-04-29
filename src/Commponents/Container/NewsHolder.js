import React, { Component } from 'react'

//components import
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Cockipt from '../Cockpit/Cockipt'
import Articles from '../Articles/Articles'

//utils import
import classes from './NewsHolder.module.css'

 class NewsHolder extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Auxiliary>
                <div className={classes["NewsHolder"]}>
                    <Cockipt />
                    <Articles />
                </div>
            </Auxiliary>
        )
    }
}

export default NewsHolder