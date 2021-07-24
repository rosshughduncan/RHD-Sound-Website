import React from 'react';
import { CSSTransition } from "react-transition-group";
import Item from '../../global/GlobalFunctions';
import SpotifyPlayer from 'react-spotify-player';
import ReactPlayer from 'react-player';

const PortfolioAudio = (props) => {
    items = [
        Item(
            <div>
                <h1>Audio Portfolio</h1>
            </div>
        , false),
        // The introduction to this page should not be split, so canSplit is set to false
        Item(
            <div>
                <p>
                    Ross comes from a musical background as a drummer {'&'} percussionist, and
                    mobile {'&'} club DJ. He has a wide knowledge of music styles, scenes and genres, 
                    and experience in using a variety of audio software and hardware in studio, live and 
                    broadcast environments.  His music and programme knowledge allows him to apply critical 
                    listening skills and select the best techniques to work with many types of audio thrown at him.
                </p>
                <p>
                    This section demonstrates Ross’s proudest audio productions.
                </p>
            </div>
        , false),
        Item(
            <div>
                <h2>Science and Faith with Radio Maria England</h2>
                <p>
                    A podcast series from Radio Maria England, a Christian radio station based in Cambridge. It explores 
                    the relationship between science and Christianity. The programme was produced and edited by many 
                    volunteers.
                </p>
                <p>
                    Ross was the station’s broadcast engineer at the time and supervised them, monitoring the project’s 
                    progress. The final masters and quality control corrections were made by Ross.
                </p>
                <SpotifyPlayer
                    uri={'spotify:episode:0PIX5bohOdotuZ9GDr1q3R'}
                    size={{width: props.itemWidth, height: 200}}
                    theme={'black'}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Don't Do Drugs Kids</h2>
                <p>
                    A 5-minute radio drama recorded, edited and mixed as part of a group university assignment. It 
                    achieved a first and the highest marks in the year group.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/dont-do-drugs-kids-joshs-wild-ride-radio-drama'}
                    width={'100%'}
                />
            </div>
        ),
        Item (
            <div>
                <h2>Mushnik and Son</h2>
                <p>
                    A cast recording from a production of the musical “Little Shop of Horrors”, performed by students 
                    from the University of the West of England’s Centre for Music society, in March 2017. This is part of 
                    a longer album of cast recordings which was edited, mixed and mastered by Ross. Solos performed by 
                    Frazer Meakin and Jack Blackmore.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/mushnik-and-son'}
                    width={'100%'}
                />
            </div>
        ),
        Item(
            <div>
                <h2></h2>
                <p>
                    An episode recorded and mixed for Christian radio station Radio Maria England while Ross was serving as their 
                    broadcast engineer. Two families come together to pray the Holy Rosary.
                </p>
                <p>
                    <i>Note: this version contains different music to the original episode due to copyright reasons.</i>
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/radio-maria-england-the-childrens-rosary-glorious-mysteries'}
                    width={'100%'}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Rude Edit – Orchard Ave EP</h2>
                <p>
                    An original EP of drum {'&'} bass and UK garage music composed, mixed and mastered by Ross under 
                    his Rude Edit alias.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/rudeedit/sets/orchard-ave-ep-free-download'}
                    width={'100%'}
                />
            </div>
        )
    ];

    return (
        <div>

        </div>
    );
};

export default PortfolioAudio;