import React, { Component } from 'react'
import '../photography-images/mountain.JPG'
import '../photography-images/seadonut.jpg'
import '../photography-images/snowymtn.jpg'
import '../photography-images/sunset.JPG'
import '../photography-images/cat.jpg'
import '../photography-images/computer.jpg'
import '../photography-images/dark.jpg'
import '../photography-images/empty.jpg'
import '../photography-images/fire.jpg'
import '../photography-images/flower.jpg'
import '../photography-images/frost.jpg'
import '../photography-images/glare.jpg'
import '../photography-images/lake.jpg'
import '../photography-images/pinecone.jpg'
import '../photography-images/sign.jpg'
import '../photography-images/silhouette.jpg'
import '../photography-images/snail.jpg'
import '../photography-images/trees.jpg'
import '../photography-images/twig.jpg'
import './Images.css'

class Photos extends Component {
    render() {
        return(
            <div className="wrapper">
                <div className="a">
                    <img src={require('../photography-images/mountain.JPG')} alt="mountain" />
                </div>
                <div className="b">
                    <img src={require('../photography-images/seadonut.jpg')} alt="seadonut"/>
                </div>
                <div className="c">
                    <img src={require('../photography-images/snowymtn.jpg')} alt="snowymtn"/>
                </div>
                <div className="d">
                    <img src={require('../photography-images/sunset.JPG')} alt="sunset"/>
                </div>
                <div className="e">
                    <img src={require('../photography-images/cat.jpg')} alt="cat"/>
                </div>
                <div className="f">
                    <img src={require('../photography-images/computer.jpg')} alt="computer"/>
                </div>
                <div className="g">
                    <img src={require('../photography-images/dark.jpg')} alt="dark"/>
                </div>
                <div className="h">
                    <img src={require('../photography-images/empty.jpg')} alt="empty"/>
                </div>
                <div className="i">
                    <img src={require('../photography-images/fire.jpg')} alt="fire"/>
                </div>
                <div className="j">
                    <img src={require('../photography-images/flower.jpg')} alt="flower"/>
                </div>
                <div className="k">
                    <img src={require('../photography-images/frost.jpg')} alt="frost"/>
                </div>
                <div className="l">
                    <img src={require('../photography-images/glare.jpg')} alt="glare"/>
                </div>
                <div className="m">
                    <img src={require('../photography-images/lake.jpg')} alt="lake"/>
                </div>
                <div className="n">
                    <img src={require('../photography-images/pinecone.jpg')} alt="pinecone"/>
                </div>
                <div className="o">
                    <img src={require('../photography-images/sign.jpg')} alt="sign"/>
                </div>
                <div className="p">
                    <img src={require('../photography-images/silhouette.jpg')} alt="silhouette"/>
                </div>
                <div className="q">
                    <img src={require('../photography-images/snail.jpg')} alt="snail"/>
                </div>
                <div className="r">
                    <img src={require('../photography-images/trees.jpg')} alt="trees"/>
                </div>
                <div className="s">
                    <img src={require('../photography-images/twig.jpg')} alt="twig"/>
                </div>
            </div>
        );
    }
}

export default Photos