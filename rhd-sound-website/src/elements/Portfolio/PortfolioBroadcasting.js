import React from 'react';
import { CSSTransition } from "react-transition-group";
import Item from '../../global/GlobalFunctions';
import FBLike from 'facebook-plugins';

const PortfolioBroadcasting = (props) => {
    const items = [
        Item(
            <div>
                <h1>Broadcasting Portfolio</h1>
            </div>
        , false),
        Item(
            <div>
                <p>
                    Ross has provided technical audio, networking, IT 
                    and radio frequency maintenance services for broadcasting 
                    studios and providers, including those listed below.
                </p>
            </div>
        , false),
        Item(
            <div>
                <h2>BFBS Cyprus</h2>
                <p><b>Role: Broadcast technician</b></p>
                <p><b>Dates: </b>April 2021 – present</p>
                <p>
                    BFBS (British Forces Broadcasting Service) is a charity providing 
                    radio, TV and entertainment services to members of the British 
                    armed forces in the UK and overseas, including the Army, Royal 
                    Air Force, Royal Navy and United Nations. Ross is based at their 
                    base in Cyprus, involved in technical duties including:
                    <ul>
                        <li>Providing assistance to the presenting team</li>
                        <li>Audio and radio frequency equipment maintenance and administration</li>
                        <li>IT and networking support</li>
                        <li>Logistics operations around the island of Cyprus</li>
                        <li>Liaising with the service delivery team</li>
                        <li>Satellite TV equipment setup</li>
                    </ul>
                </p>
                <FBLike
                    href='https://www.facebook.com/BFBSCyprus'
                    action='like'
                    layout='button_count'
                    locale='en_GB'
                    share={true}
                    showFaces={false}
                />
            </div>
        ),
        Item(
            <div>
                <h2>Radio Maria England</h2>
                <p><b>Role: </b>Senior broadcast engineer</p>
                <p><b>Dates: </b>July 2020 – April 2021</p>
                <p>
                    Radio Maria England is a charity Christian radio station based in Cambridge, 
                    UK, producing talk shows and interviews in radio and podcast formats, and playing 
                    classic and contemporary Christian music and cleverly-selected secular music. They 
                    broadcast on DAB in the Cambridgeshire area and on DAB+ in London, as well as online. 
                    They are part of the larger Radio Maria World Family network, headquartered in Erba, 
                    near Milan, Italy. With the England organisation having formed in late 2019, Ross was 
                    only the second member of staff to be based at their new studio. The start-up phase 
                    for the station was challenging, with many of the usual operations being restricted 
                    because of the COVID-19 pandemic, which was at its peak at the time. The staff 
                    frequently praised Ross on his ability to cope with difficult circumstances and 
                    handle many responsibilities at once. Ross’s responsibilities included:
                </p>
                <ul>
                    <li>Managing the audio, networking and IT equipment in the studio</li>
                    <li>Training staff and volunteers on operating the studios and on audio editing techniques</li>
                    <li>Assistance to the editorial team</li>
                    <li>Working with the coordinator to manage liaisons and accounts with external companies</li>
                    <li>Supervising visiting engineers and making risk assessments for visitors</li>
                    <li>Contributing to meetings and handling operational challenges</li>
                    <li>Liaising with a multi-national team</li>
                    <li>Receiving extensive online training on broadcasting and radio frequency engineering from the Italian team</li>
                </ul>
                <FBLike
                    href='https://www.facebook.com/radiomariaengland'
                    action='like'
                    layout='button_count'
                    locale='en_GB'
                    share={true}
                    showFaces={false}
                />
            </div>
        )
    ];

    return (
        <div>
            
        </div>
    );
};

export default PortfolioBroadcasting;