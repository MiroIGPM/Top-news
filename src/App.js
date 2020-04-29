import React, { Component } from 'react'

// Components import
import Layout from './hoc/Layout/Layout'
import NewsHolder from './Commponents/Container/NewsHolder'

import './App.css'

 class App extends Component {
  render() {
    return (
      <div>
        <Layout>
           <NewsHolder /> 
        </Layout>
      </div>
    )
  }
}

export default App