import React from 'react';
import { CSSTransition } from "react-transition-group";
import { Item, pubImg } from '../global/GlobalFunctions';

const About = (props) => {
    const items = [
        Item(
            <div>
                <h1>About RHD Sound</h1>
            </div>
        , false),
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
                    Between 2013 and 2017, whilst studying for GCSEs and A Levels, 
                    he ran a mobile DJ service for birthday parties, school events 
                    and other private functions under the trading name “The Stepper”. 
                    With significant support from family members, his service was 
                    advertised mostly through word of mouth. From this point on, he 
                    knew that a career in professional audio would be his future.
                </p>
            </div>
        ),
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
                    Ross moved to Bristol in 2016 to study Audio and Music Technology at 
                    the University of the West of England. Whilst studying, he circulated 
                    amongst the music producer, DJ, live music, hospitality and promoter 
                    communities. He has performed DJ sets, run events and set up equipment 
                    at various Bristol venues and events, notable the famous Lakota nightclub, 
                    where he setup the decks and lighting, and operated lights during club events, 
                    for artists such as Digital Mystikz, Calibre and many more, involving intense 
                    focus at anti-social hours. He has also mixed and mastered music of fellow 
                    electronic musicians and bands.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    Whilst studying and upon graduation, Ross freelanced with various events hire 
                    companies and theatres as part of their stage, sound and lighting crews. A full 
                    list of events worked on can be found on the Events tab on the portfolio section 
                    of this site.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    In 2020, after having been in the deep end of the freelance world, Ross started his 
                    first full-time technical position at the arts organisation, Wiltshire Creative, who 
                    run the Salisbury Playhouse theatre, Salisbury Arts Centre and Salisbury International 
                    Arts Festival. Ross and the team catered for many visiting commercial touring plays, 
                    musicals, corporate events and comedy nights.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    In July 2020, after the COVID-19 pandemic put a hold on the events industry for the 
                    foreseeable future, Ross took his hard-earned skills from the events industry into roles 
                    in the broadcasting sectors, where he is working today, with his time learning extra-curricular 
                    skills in IT systems administration, network engineering and software development has 
                    contributed to his positions significantly.
                </p>
            </div>
        ),
        Item(
            <div>
                <p>
                    In May 2021, Ross moved on a “gap year-style” posting to Cyprus for a broadcast engineering project, 
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

        </div>
    );
};

export default About;