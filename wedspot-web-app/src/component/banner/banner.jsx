import React from 'react'
import './banner.css'

export default function Banner() {
    return (
        <div>
            <div id="landing">
        <div class="ui secondary stackable menu" id="menu">
            <div class="item">
                <i class="industry purple big icon"></i>
            </div>
            <div class="right menu">
                <div class="item header"><a href="index.html">Home</a></div>
                <div class="item header"><a href="#">Properties</a></div>
                <div class="item header"><a href="#">About</a></div>
                <div class="item header"><a href="#">Blog</a></div>
                <div class="item header"><a href="#">Contact</a></div>
                <div class="item">
                    <button class="ui huge purple button">Create listing</button>
                </div>
            </div>
        </div>
        <div class="ui text container">
            <h2 class="ui inverted header">Lorem ipsum dolor sit amet.</h2>
            <h5 class="ui inverted header">Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste sapiente
                praesentium blanditiis ea
                aliquid itaque modi saepe et ad?</h5>
        </div>
    
        </div>
    </div>
    )
}
