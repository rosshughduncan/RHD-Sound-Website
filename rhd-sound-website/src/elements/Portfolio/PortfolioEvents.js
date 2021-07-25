import React from 'react';
import { CSSTransition } from "react-transition-group";
import Item from '../../global/GlobalFunctions';
import '../../App.css';

const PortfolioEvents = (props) => {
    const items = [
        Item(
            <div>
                <h1>Events Credits Portfolio</h1>
            </div>
        , false),
        Item(
            <div>
                <p>
                    Ross has gained ample experience as a live events technician, 
                    in live sound, lighting, stage and crew duties, with tech 
                    experience at some famous venues including Bristol’s The Fleece 
                    and Thekla, as well as Cardiff’s Principality Stadium, the NEC 
                    in Birmingham and the prestigious Salisbury Playhouse theatre, 
                    not mentioning outdoor festivals and corporate functions.
                </p>
                <p>
                    Below is a list of the events which Ross has been involved in, 
                    with the roles performed.
                </p>
            </div>
        ),
        Item(
            <div>
                <h2>Testimonial</h2>
                <p>
                    "Ross did a great job on the sound ... it's the best sound job that
                    I've experienced whilst I've been at Henbury [School]."
                </p>
                <cite>
                    Liz Mowat and Samantha Harper: Joint Heads of Performing Arts, 
                    Blaise High School, Bristol (school stage production of "The Wiz", 
                    an adaptation of “The Wizard of Oz” with a live band)
                </cite>
            </div>
        ),
        Item(
            <div>
                <table>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Venue</th>
                        <th>Role</th>
                        <th>Date(s)</th>
                    </tr>
                </thead>
                <div className={'TableSeparator'}/>
                    <tbody>
                        <tr>
                            <td><b>Mixed live music nights</b></td>
                            <td>The Canteen and Old Market Assembly, Bristol</td>
                            <td>Part of sound engineer team</td>
                            <td>Sep 2019 - Mar 2020</td>
                        </tr>
                        <tr>
                            <td><b>TEDx Salisbury</b></td>
                            <td>Salisbury Arts Centre</td>
                            <td>Sound and AV technician</td>
                            <td>Feb 2020</td>
                        </tr>
                        <tr>
                            <td><b>"Lorca's Blood Wedding: Retold by Barney Norris"</b></td>
                            <td>Salisbury Playhouse</td>
                            <td>Lighting {'&'} sound operator, set builder and rigger</td>
                            <td>Feb 2020</td>
                        </tr>
                        <tr>
                            <td><b>"Jack {'&'} The Beanstalk" by Polka Dot Pantomimes</b></td>
                            <td>The Broadway Theatre, Barking, London</td>
                            <td>Follow-spot operator, stage crew and flyman</td>
                            <td>Dec 2019 - Jan 2020</td>
                        </tr>
                        <tr>
                            <td><b>Picture This Tour</b></td>
                            <td>SWX, Bristol</td>
                            <td>Sound crew</td>
                            <td>Nov 2019</td>
                        </tr>
                        <tr>
                            <td><b>Fever 333 Tour</b></td>
                            <td>SWX, Bristol</td>
                            <td>Sound crew</td>
                            <td>Nov 2019</td>
                        </tr>
                        <tr>
                            <td><b>Chicken Picnic {'&'} Melotone Tour</b></td>
                            <td>Mr Wolf's, Bristol</td>
                            <td>Sound engineer</td>
                            <td>Nov 2019</td>
                        </tr>
                        <tr>
                            <td><b>Gender Roles sold-out tour</b></td>
                            <td>Rough Trade Bristol</td>
                            <td>Sound engineer</td>
                            <td>Oct 2019</td>
                        </tr>
                        <tr>
                            <td><b>Dixons Carphone PEAK Conference</b></td>
                            <td>NEC Birmingham</td>
                            <td>Follow-spot operator and lighting crew</td>
                            <td>Oct 2019</td>
                        </tr>
                        <tr>
                            <td><b>South Gloucestershire Business Show</b></td>
                            <td>Bristol Science Park</td>
                            <td>AV crew</td>
                            <td>Oct 2019</td>
                        </tr>
                        <tr>
                            <td><b>P!nk Beautiful Trauma World Tour</b></td>
                            <td>Cardiff Principality Stadium</td>
                            <td>Lighting crew</td>
                            <td>Sep 2019</td>
                        </tr>
                        <tr>
                            <td><b>HowTheLightGetsIn Festival</b></td>
                            <td>Kenwood House, London</td>
                            <td>Sound engineer and site crew</td>
                            <td>Sep 2019</td>
                        </tr>
                        <tr>
                            <td><b>Machine Gun Kelly tour</b></td>
                            <td>SWX, Bristol</td>
                            <td>Sound crew</td>
                            <td>Aug 2019</td>
                        </tr>
                        <tr>
                            <td><b>Sam Fender tour</b></td>
                            <td>SWX, Bristol</td>
                            <td>Sound crew</td>
                            <td>Aug 2019</td>
                        </tr>
                        <tr>
                            <td><b>Jack Calloway Dance Band</b></td>
                            <td>The Bristol Stable</td>
                            <td>Sound engineer</td>
                            <td>Aug 2019</td>
                        </tr>
                        <tr>
                            <td><b>Bristol Pride Festival</b></td>
                            <td>Durdham Downs, Bristol</td>
                            <td>Sound crew</td>
                            <td>Jul 2019</td>
                        </tr>
                        <tr>
                            <td><b>Bristol Sounds featuring Bloc Party</b></td>
                            <td>Lloyds Amphitheatre, Bristol</td>
                            <td>Sound crew</td>
                            <td>Jul 2019</td>
                        </tr>
                        <tr>
                            <td><b>Sophie Ellis-Bextor tour</b></td>
                            <td>St. George's, Bristol</td>
                            <td>Sound crew</td>
                            <td>Jun 2019</td>
                        </tr>
                        <tr>
                            <td><b>BBC Food and Farming Awards</b></td>
                            <td>Bristol City Hall</td>
                            <td>Lighting crew</td>
                            <td>Jun 2019</td>
                        </tr>
                        <tr>
                            <td><b>The Hu tour</b></td>
                            <td>SWX, Bristol</td>
                            <td>Sound crew</td>
                            <td>Jun 2019</td>
                        </tr>
                        <tr>
                            <td><b>From The Jam tour</b></td>
                            <td>St. George's, Bristol</td>
                            <td>Sound crew</td>
                            <td>Jun 2019</td>
                        </tr>
                        <tr>
                            <td><b>Dot To Dot Festival</b></td>
                            <td>The Fleece, Bristol</td>
                            <td>Sound crew</td>
                            <td>May 2019</td>
                        </tr>
                        <tr>
                            <td><b>Gong Tour</b></td>
                            <td>Thekla, Bristol</td>
                            <td>Sound crew</td>
                            <td>May 2019</td>
                        </tr>
                        <tr>
                            <td><b>The Heavy tour</b></td>
                            <td>Trinity Centre, Bristol</td>
                            <td>Sound crew</td>
                            <td>May 2019</td>
                        </tr>
                        <tr>
                            <td><b>"Annie"</b></td>
                            <td>Blaise High School, Bristol</td>
                            <td>SFX operator</td>
                            <td>Feb 2019</td>
                        </tr>
                        <tr>
                            <td><b>"UPS: Used Panty Services" (short film)</b></td>
                            <td>Cardiff</td>
                            <td>Sound recordist</td>
                            <td>Sep 2018</td>
                        </tr>
                        <tr>
                            <td><b>Sequences Festival Afterparty</b></td>
                            <td>Lakota, Bristol</td>
                            <td>Lighting operator</td>
                            <td>Aug 2018</td>
                        </tr>
                        <tr>
                            <td><b>Calibre {'&'} DRS: Alchemy</b></td>
                            <td>Lakota, Bristol</td>
                            <td>Lighting operator</td>
                            <td>Aug 2018</td>
                        </tr>
                        <tr>
                            <td><b>Psyched featuring Digital Mystikz</b></td>
                            <td>Lakota, Bristol</td>
                            <td>Lighting operator</td>
                            <td>May 2018</td>
                        </tr>
                        <tr>
                            <td><b>SouthWest Open Youth Orchestra (now National Open Youth Orchestra)</b></td>
                            <td>WeTheCurious, Bristol</td>
                            <td>Sound recordist</td>
                            <td>Apr 2018</td>
                        </tr>
                        <tr>
                            <td><b>"Zorro The Musical" by UWE Bristol Centre for Music</b></td>
                            <td>Redgrave Theatre, Bristol</td>
                            <td>Sound mixer, set builder and audio post-production editor</td>
                            <td>Mar 2018</td>
                        </tr>
                        <tr>
                            <td><b>"Beauty And The Beast"</b></td>
                            <td>Blaise High School, Bristol</td>
                            <td>Sound mixer</td>
                            <td>Feb 2018</td>
                        </tr>
                        <tr>
                            <td><b>"Musical Mixtape" by Bristol Musical Comedy Club</b></td>
                            <td>St Monica Trust, Bristol</td>
                            <td>Sound mixer</td>
                            <td>Oct 2017</td>
                        </tr>
                        <tr>
                            <td><b>City of Bristol Brass Band Spring Concert</b></td>
                            <td>St Michael's Church Centre, Stoke Gifford, nr. Bristol</td>
                            <td>Sound recordist</td>
                            <td>Apr 2017</td>
                        </tr>
                        <tr>
                            <td><b>"Little Shop of Horrors" by UWE Bristol Centre for Music</b></td>
                            <td>Redgrave Theatre, Bristol</td>
                            <td>SFX operator, set building and audio post-production editor</td>
                            <td>Mar 2017</td>
                        </tr>
                        <tr>
                            <td><b>"The Wiz" (adaptation of The Wizard of Oz)</b></td>
                            <td>Blaise High School, Bristol</td>
                            <td>Sound mixer</td>
                            <td>Feb 2017</td>
                        </tr>
                        <tr>
                            <td><b>Henley Festival, Bedouin Tent</b></td>
                            <td>Henley-on-Thames</td>
                            <td>Sound crew</td>
                            <td>Jul 2016</td>
                        </tr>
                        <tr>
                            <td><b>The Little Welly Festival music stage</b></td>
                            <td>Henley-on-Thames</td>
                            <td>Sound engineer</td>
                            <td>Jun 2016</td>
                        </tr>
                        <tr>
                            <td><b>Music On The Meadows Festival</b></td>
                            <td>Mill Meadows, Henley-on-Thames</td>
                            <td>Stage crew, lighting operator and DJ</td>
                            <td>Jun 2013, 2014 {'&'} 2016</td>
                        </tr>
                        <tr>
                            <td><b>Henley Youth Festival Gig Night</b></td>
                            <td>Lovibonds Brewery, Henley-on-Thames</td>
                            <td>Sound crew and DJ</td>
                            <td>Mar 2014, 2015 {'&'} 2016</td>
                        </tr>
                        <tr>
                            <td><b>"Our House"</b></td>
                            <td>The Henley College, Henley-on-Thames</td>
                            <td>Sound engineer</td>
                            <td>Dec 2015</td>
                        </tr>
                        <tr>
                            <td><b>"There And Back Again" (adaptation of The Hobbit)</b></td>
                            <td>South Hill Park Arts Centre, Bracknell</td>
                            <td>Sound mixer {'&'} SFX operator</td>
                            <td>Aug 2013</td>
                        </tr>
                        <tr>
                            <td><b>Henley Youth Festival Dance and Variety Shows</b></td>
                            <td>Kenton Theatre, Henley-on-Thames</td>
                            <td>Sound, lighting and AV crew</td>
                            <td>Mar 2010 {'&'} 2013</td>
                        </tr>
                        <tr>
                            <td><b>Henley Frige Festival</b></td>
                            <td>The Chocolate Cafe, Henley-on-Thames</td>
                            <td>Lighting crew</td>
                            <td>Jul 2012</td>
                        </tr>
                        <tr>
                            <td><b>"The Boyfriend" by Henley Amateur Operatic {'&'} Dramatic Society</b></td>
                            <td>Kenton Theatre, Henley-on-Thames</td>
                            <td>Stage crew</td>
                            <td>Apr 2010</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        , false)
    ];

    return (
        <div>
            
        </div>
    );
};

export default PortfolioEvents;