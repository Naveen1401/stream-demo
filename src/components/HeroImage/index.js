import React from 'react';
import Hero_Image from '../../Images/HeroImage.jpg';
import './style.css'

function HeroImage() {
    return (
        <div className="heroImageContainer">
            <img src={Hero_Image} alt="Hero Image"/>
        </div>
    );
}

export default HeroImage;
