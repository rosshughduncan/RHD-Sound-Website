import { Component, useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";
//import VideoJSPlayer from "../global/VideoJSPlayer";
import { pubImg } from "../global/GlobalFunctions";
import PortfolioAudio from "../elements/Portfolio/PortfolioAudio";
import PortfolioVideo from "../elements/Portfolio/PortfolioVideo";

export default class MainBody extends Component {
    noOfColumns = 2;
    
    // VideoJS options template for all pages which use it
    videoJsOptions = (source) => {
        return ({
            autoplay: false,
            controls: true,
            sources: [{
                src: pubImg(source),
                type: 'video/mp4'
            }],
            width: window.innerWidth * 0.82
        });
    };

    currentColourClass = [-1];

    render() {
        return (
            <div className={'App'}>
                {/*<PortfolioAudio
                    showing={true}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                />*/}
                <PortfolioVideo
                    showing={true}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
            </div>
        );
    };
};