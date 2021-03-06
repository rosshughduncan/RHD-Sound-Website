import React, { Component } from "react";
import { pubImg } from "../global/GlobalFunctions";
import PortfolioAudio from "../elements/Portfolio/PortfolioAudio";
import PortfolioVideo from "../elements/Portfolio/PortfolioVideo";
import PortfolioEvents from '../elements/Portfolio/PortfolioEvents';
import PortfolioBroadcasting from '../elements/Portfolio/PortfolioBroadcasting';
import Welcome from '../elements/Welcome';
import About from '../elements/About';
import Portfolio from "../elements/Portfolio";
import Contact from "./Contact";

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

    // resetCurrentColourClass = () => {
    //     this.currentColourClass[0] = -1;
    // }

    render() {
        return (
            <div className={'App'}>
                <Welcome
                    show={this.props.pageStates.headers[0]}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                <About
                    show={this.props.pageStates.headers[1]}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                <Portfolio
                    show={this.props.pageStates.headers[2]}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                <PortfolioAudio
                    show={this.props.pageStates.sections[0]}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                <PortfolioVideo
                    show={this.props.pageStates.sections[1]}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                <PortfolioEvents
                    show={this.props.pageStates.sections[2]}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                <PortfolioBroadcasting
                    show={this.props.pageStates.sections[3]}
                    videoJsSource={this.videoJsOptions}
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
                {/* {this.resetCurrentColourClass()} */}
                <Contact
                    colourClassCounter={this.currentColourClass}
                    numColumns={this.noOfColumns}
                />
            </div>
        );
    };
};