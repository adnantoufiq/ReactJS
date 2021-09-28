import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

class ConditionalRendering extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
             number:2
        }
    }
    

    render() {
        
        const givenNumber=prompt(alert("enter a number"))
        
        return((givenNumber%2===0) ? <LoginPage /> : <HomePage />)
    }
}

export default ConditionalRendering