import React, { Component } from 'react';
import AdDisplay from "ad-sdk-persona";

class Ad extends Component {
    constructor(props) {
        super(props);
        this.adDisplayed = false;
    }

    componentDidMount() {
        if (!this.adDisplayed) {
            const myAd = new AdDisplay();
            myAd.display('my-ad-container', { backgroundColor: 'black' });
            this.adDisplayed = true;
        }
    }

    render() {
        return (
            <div>
                <div id="my-ad-container"></div>
            </div>
        );
    }
}

export default Ad;