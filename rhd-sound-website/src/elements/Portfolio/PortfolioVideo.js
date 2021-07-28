import React from 'react';
import { CSSTransition } from "react-transition-group";
import { Item, renderElementDiv } from '../../global/GlobalFunctions';
import VideoJSPlayer from '../../global/VideoJSPlayer';

const PortfolioVideo = (props) => {
    const videos = {
        raidersOfTheLostArk: props.videoJsSource('RaidersLostArkDemo.mp4'),
        finlingoFinancialMarkets: props.videoJsSource('FinlingoIntroToBanking_FinancialMarkets.mp4')
    };

    // Set animation timing for this page
    const animationTiming = {
        enter: 500,
        exit: 1000
    };

    const items = [
        Item(
            <div>
                <h1>Video Portfolio</h1>
            </div>
        , false),
        Item(
            <div>
                <p>Ross has demonstrated skills in video editing and audio production for video. Here are some examples.</p>
            </div>
        , false),
        Item(
            <div>
                <h2>Training Video for Finlingo (Financial Markets),<br></br>part of their “Introduction to Banking series”</h2>
                <p>
                    Finlingo is a start-up creating training content on finance, with an app containing lessons and videos.
                </p>
                <p>
                    Ross edited and mixed the video and audio segments for their first series of videos within the new app. 
                </p>
                <p>
                    See the business’s website at: <a
                        href={"https://finlingo.com"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}>
                            Finlingo.com
                        </a>
                </p>
                <br></br>
                <br></br>
                <VideoJSPlayer { ...videos.finlingoFinancialMarkets }/>
                <br></br>
            </div>
        ),
        Item(
            <div>
                <h2>Reconstruction of the Movie “Raiders of the Lost Ark” (1981)</h2>
                <p>
                    A re-interpretation of the famous fight scene from Raiders of the Lost Ark. The effects and atmos were all 
                    re-sourced and edited by Ross to produce a sound for the picture. <i>Disclaimer: this video was created for 
                    an academic assignment and is intended to be transformative under fair use. If the copyright holder of 
                    the original material has any issues, please get in touch via the Contact section.</i>
                </p>
                <br></br>
                <br></br>
                <VideoJSPlayer { ...videos.raidersOfTheLostArk }/>
                <br></br>
            </div>
        )
    ];

    return (
        <div>
            {
                renderElementDiv(
                    items,
                    ['VideoPortfolio1', 'VideoPortfolio2', 'VideoPortfolio3'],
                    props.showing,
                    animationTiming,
                    props.colourClassCounter,
                    props.numColumns
                )
            }
        </div>
    );
};

export default PortfolioVideo;