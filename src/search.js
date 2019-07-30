'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import './search.css'

class Search extends React.Component {
    render () {
        return <dev className="search-text"> React Component  Search Page Text</dev>
    }
}

ReactDom.render(
    <Search></Search>,
    document.getElementById('root')
)