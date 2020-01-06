import { Component } from "react";
import React from "react";
// your ImageSlider code here!

class ImageSlider extends Component {

    constructor() {
        super();
        this.state = {
            currentSlideIndex: 0
        }
    }

    render () {
        return <p>I am on slide {this.state.currentSlideIndex}</p>
    }
}

export default ImageSlider;