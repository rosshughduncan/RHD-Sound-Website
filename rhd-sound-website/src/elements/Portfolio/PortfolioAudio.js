import React from 'react';
//import { CSSTransition } from "react-transition-group";
import { Item, renderElementDiv } from '../../global/GlobalFunctions';
import SpotifyPlayer from 'react-spotify-player';
import ReactPlayer from 'react-player';
import VideoJSPlayer from '../../global/VideoJSPlayer';

const PortfolioAudio = (props) => {
    // Setting the sources for each video
    const videos = {
        shooterGameMusic: props.videoJsSource('ShooterGameMusic.mp4')
    };

    // Width for SoundCloud components
    const soundCloudWidth = '100%';

    const items = [
        Item(
            <div>
                <h1>Audio Portfolio</h1>
            </div>
        , false),
        // The introduction to this page should not be split, so canSplit is set to false
        Item(
            <div>
                <p><i>
                    Ross comes from a musical background as a drummer {'&'} percussionist, and
                    mobile {'&'} club DJ. He has a wide knowledge of music styles, scenes and genres, 
                    and experience in using a variety of audio software and hardware in studio, live and 
                    broadcast environments.  His music and programme knowledge allows him to apply critical 
                    listening skills and select the best techniques to work with many types of audio thrown at him.
                </i></p>
                <p><i>
                    This section demonstrates Ross’s proudest audio productions.
                </i></p>
            </div>
        , false),
        Item(
            <div>
                <h2>Rude Edit – Orchard Ave EP</h2>
                <p>
                    An original EP of drum {'&'} bass and UK garage music<br></br>composed, mixed and mastered by Ross under 
                    his Rude Edit alias.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/rudeedit/sets/orchard-ave-ep-free-download'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Don't Do Drugs Kids</h2>
                <p>
                    A 5-minute radio drama recorded, edited and mixed<br></br>as part of a group university assignment.
                </p>
                <p>
                    It achieved a first and the highest marks in the year group.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/dont-do-drugs-kids-joshs-wild-ride-radio-drama'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        // Item(
        //     <div>
        //         <h2>Science and Faith with Radio Maria England</h2>
        //         <p>
        //             A podcast series from Radio Maria England,<br></br>a Christian radio station based in Cambridge.<br></br><br></br>It explores 
        //             the relationship between science and Christianity.<br></br>The programme was produced and edited by many volunteers.
        //         </p>
        //         <p>
                    
        //         </p>
        //         <p>
        //             Ross was the station’s broadcast engineer at the time and supervised<br></br>them. The final masters and quality control corrections were made by Ross.
        //         </p>
        //         <p></p>
        //         <SpotifyPlayer
        //             uri={'spotify:episode:0PIX5bohOdotuZ9GDr1q3R'}
        //             size={{width: soundCloudWidth, height: 200}}
        //             theme={'black'}
        //         />
        //     </div>
        // ),
        Item (
            <div>
                <h2>Mushnik and Son</h2>
                <p>
                    A cast recording from a production of the musical “Little Shop of Horrors”,<br></br>performed by students 
                    from the University of the West of England’s<br></br>Centre for Music society, in March 2017.
                </p>
                <p>
                    This is part of a longer album of cast recordings which was<br></br>edited, mixed and mastered by Ross.<br></br>Solos performed by 
                    Frazer Meakin and Jack Blackmore.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/mushnik-and-son'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Kings Kin - Trixie</h2>
                <p>A single from Bristol-based band Kings Kin, mastered by Ross.</p>
                <ReactPlayer
                    url={'https://soundcloud.com/kings-kin-band/trixie'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Arwel Brown – cover of Biffy Clyro’s “Fingerhut”</h2>
                <p>
                    A group university assignment project which achieved a first. 
                </p>
                <p>
                    Vocals, bass and guitar are by Arwel, 
                    with Ross Duncan on drums.<br></br>Recording, mixing and mastering by Ross Duncan, Maxi Bajela and Dan Morris.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/arwel-brown-fingerhut-biffy-clyro-cover'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        Item(
            <div>
                <h2>The Orange Skies – You Don’t Wanna Say</h2>
                <p>Part of a demo from Bristol-based band The Orange Skies, fully recorded, mixed and mastered by Ross.</p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/you-dont-wanna-say'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Radio Maria England:<br></br>The Children's Rosary: The Glorious Mysteries</h2>
                <p>
                    An episode recorded and mixed for Christian radio station Radio Maria England<br></br>while Ross was serving as their 
                    broadcast engineer.
                </p>
                <p>Two families come together to pray the Holy Rosary.</p>
                <p>
                    <i>Note: this version contains different music to the original episode<br></br>due to copyright reasons.</i>
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/radio-maria-england-the-childrens-rosary-glorious-mysteries'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Changing States - Silver Linings</h2>
                <p>
                    Part of a self-released EP by Bristol-based producer Changing States, mastered by Ross.
                </p>
                <ReactPlayer
                    url={'https://soundcloud.com/step9productions/changing-states-silver-linings'}
                    width={soundCloudWidth}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Interactive Music for Shooter Games Presentation</h2>
                <p>
                    An FMOD Studio project produced for a university assignment.<br></br>It is a music state machine for a multiplayer 
                    shooter game idea,<br></br>inspired by themes from Fortnite and Bioshock.
                </p>
                <p>
                    This video demonstrates the different audio states<br></br>and how they apply to the gameplay scenario.
                </p>
                <br></br>
                <br></br>
                <VideoJSPlayer { ...videos.shooterGameMusic }/>
            </div>
        )
    ];

    return (
        <div>
            {renderElementDiv(
                items,
                ['AudioPortfolio1', 'AudioPortfolio2', 'AudioPortfolio3'],
                props.show,
                props.colourClassCounter,
                props.numColumns
            )}
        </div>
    );
};

export default PortfolioAudio;