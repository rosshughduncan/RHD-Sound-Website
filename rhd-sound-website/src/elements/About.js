import React from 'react';
import { Item, pubImg, renderElementDiv } from '../global/GlobalFunctions';
import '../App.css';

const About = (props) => {
    const items = [
        Item(
            <div>
                <h1>About RHD Sound</h1>
            </div>
        , false),
        Item(
            <img
                src={pubImg('About.jpg')}
                alt={"Ross Duncan of RHD Audio in Cyprus"}
                width={'100%'}
            />
        ),
        Item(
            <div>
                <p>
                    Ross Duncan started his interest in audio as a musician and
                    started having drum lessons in 2006. He played drums and 
                    percussion in wind orchestras and jazz ensembles, whilst getting 
                    stuck into learning electronic music production. He grew an 
                    interest in the technical crews which were present at live 
                    performances and started volunteering and training in amateur
                    theatre groups and summer schools in the backstage crews. 
                </p>
            </div>
        ),
        
        Item(
            <div>
                <p>
                Between 2013 and 2017, whilst studying for GCSEs and A Levels, 
                    he ran a<br></br>mobile DJ service for birthday parties, school events 
                    and other private<br></br>functions under the trading name “The Stepper”. 
                    With significant<br></br>support from family members, his service was 
                    advertised mostly<br></br>through word of mouth. From this point on, he 
                    knew that a career in<br></br>professional audio would be his future.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    Ross moved to Bristol in 2016 to study Audio and Music Technology at<br></br>
                    the University of the West of England. Whilst studying, he circulated<br></br>
                    amongst the music producer, DJ, live music, hospitality and promoter<br></br>
                    communities. He has performed DJ sets, run events and set up<br></br>equipment 
                    at various Bristol venues and events, notable the famous<br></br>Lakota nightclub, 
                    where he setup the decks and lighting, and operated<br></br>lights during club events, 
                    for artists such as Digital Mystikz, Calibre<br></br>and many more, involving intense 
                    focus at anti-social hours.<br></br>He has also mixed and mastered music of fellow 
                    electronic musicians and bands.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    Whilst studying and upon graduation, Ross freelanced with various<br></br>events hire 
                    companies and theatres as part of their stage, sound and<br></br>lighting crews. A full 
                    list of events worked on can be found on the<br></br>Events tab on the portfolio section 
                    of this site.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    In 2020, after having been in the deep end of the freelance world,<br></br>Ross started his 
                    first full-time technical position at the arts<br></br>organisation, Wiltshire Creative, who 
                    run the Salisbury Playhouse<br></br>theatre, Salisbury Arts Centre and Salisbury International 
                    Arts Festival.<br></br>Ross and the team catered for many visiting commercial touring plays,<br></br>
                    musicals, corporate events and comedy nights.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    In July 2020, after the COVID-19 pandemic put a hold on the events<br></br>industry for the 
                    foreseeable future, Ross took his hard-earned skills<br></br>from the events industry into roles 
                    in the broadcasting sectors,<br></br>where he is working today, with his time learning extra-curricular<br></br>
                    skills in IT systems administration, network engineering and<br></br>software development has 
                    contributed to his positions significantly.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    In May 2021, Ross moved on a “gap year-style” posting to Cyprus<br></br>for a broadcast engineering project, 
                    which is where he is currently.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    Ross Duncan set up this website as a portfolio of previous events and projects, and to demonstrate his 
                    skills to other companies and freelancers in need of a technical and creative audio specialist. Get in 
                    touch via the form below for more.
                </p>
            </div>
        )
    ];

    return (
        <div>
            {renderElementDiv(
                items,
                ['About1', 'About2', 'About3'],
                props.show,
                props.colourClassCounter,
                props.numColumns
            )}
        </div>
    );
};

export default About;