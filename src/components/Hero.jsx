import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Hero.css';
import starWarsPoster from "../assets/starWarsPoster.jpg"

function Hero() {
    return (
        <div class="hero-section">
            <img className="poster" src={starWarsPoster.jpg} alt="">
        </div>
    );
}

export default Hero;