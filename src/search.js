'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import logo from './image/logo.png'
import './search.less'

class Search extends React.Component {
    render () {
        return <dev className="search-text"> 
        React Component  Search Page Text <br/>
        <img src={logo} />
        </dev>
    }
}

ReactDom.render(
    <Search></Search>,
    document.getElementById('root')
)