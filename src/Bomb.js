import { Component } from "react";
import React from "react";

// your Bomb code here!
class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    } 
    render () {
        return this.generateText()
    }

    generateText() {
        return this.state.secondsLeft > 0 ? <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p> 
    }
}

export default Bomb;