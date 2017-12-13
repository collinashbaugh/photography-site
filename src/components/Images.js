import React, { Component } from 'react'
import 'Images.css'
import mountain from './photography-images/mountain.JPG'

export default class Images extends Component {
    render() {
        return(
            <div>
                <img src={mountain}/>    
            </div>
        );
    }
}