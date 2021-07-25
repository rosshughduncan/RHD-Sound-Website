import React from 'react';
import { CSSTransition } from "react-transition-group";
import Item from '../../global/GlobalFunctions';
import VideoJSPlayer from '../../global/VideoJSPlayer';

const PortfolioVideo = (props) => {
    const videos = {
        raidersOfTheLostArk: props.videoJsSource('RaidersLostArkDemo.mp4'),
        finlingoFinancialMarkets: props.videoJsSource('FinlingoIntroToBanking_FinancialMarkets.mp4')
    };

    const items = [
        Item(
            <div>
                <h1>Video Portfolio</h1>
            </div>
        , false),
        Item(
            <div>
                <p>Ross has also demonstrated skills in video editing and audio production for video. Here are some examples.</p>
            </div>
        , false),
        Item(
            <div>
                <h2>Training Video for Finlingo (Financial Markets), part of their “Introduction to Banking series”</h2>
                <p>
                    Finlingo is a start-up creating training content on finance, with an app containing lessons and videos. Ross 
                    edited and mixed the video and audio segments for their first series of videos within the new app. See the 
                    business’s website at: <a
                        href={"https://finlingo.com"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}>
                            Finlingo.com
                        </a>
                </p>
                <br></br>
                <br></br>
                <VideoJSPlayer { ...videos.finlingoFinancialMarkets }/>
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
            </div>
        )
    ];

    return (
        <div>
            
        </div>
    );
};

export default PortfolioVideo;