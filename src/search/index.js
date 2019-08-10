'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import logo from './image/logo.png'
import './search.less'

class Search extends React.Component {
    render () {
        // debugger
        return <div className="search-text"> 
        React Component  Search Page Text  Test HotModuleReplacementPlugin  <br/>
        <img src={logo} />
        </div>
    }
}

ReactDom.render(
    <Search></Search>,
    document.getElementById('root')
)