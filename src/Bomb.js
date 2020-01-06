import React from "react";

// your Bomb code here!
class Bomb extends React.Component {

    constructor(props) {
        super()        
        this.state = {secondsLeft: props.initialCount}
    }

    secondsConverter = (secLeft) => {
        return secLeft > 0 ? `${secLeft} seconds left before I go boom!`: `Boom!`
    }

    render() {
        return (<div>{this.secondsConverter(this.state.secondsLeft)}</div>)
    }
}

export default Bomb