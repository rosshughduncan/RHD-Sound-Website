import { Component, useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";
//import VideoJSPlayer from "../global/VideoJSPlayer";
import { pubImg } from "../global/GlobalFunctions";
import PortfolioAudio from "../elements/Portfolio/PortfolioAudio";
import PortfolioVideo from "../elements/Portfolio/PortfolioVideo";

export default class MainBody extends Component {
    noOfColumns = 2;

    state = {
        portfolioAudio: {
            showing: true
        },
        portfolioVideo: {
            showing: false
        }
    };
    
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
                <button
                    onClick={() => {
                        this.setState({
                            portfolioAudio: {
                                showing: false
                            },
                            portfolioVideo: {
                                showing: true
                            }
                        })
                    }}    
                >
                        Test me
                </button>
                <PortfolioAudio
                    show={this.state.portfolioAudio}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                <PortfolioVideo
                    show={this.state.portfolioVideo}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                

                
            </div>
        );
    };
};