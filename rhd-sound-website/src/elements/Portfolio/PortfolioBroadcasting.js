import React from 'react';
import { Item, renderElementDiv, pubImg } from '../../global/GlobalFunctions';
//import FBLike from 'facebook-plugins';

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
                <img
                    src={pubImg('FMTower.jpg')}
                    alt={'An FM transmitter tower in Cyprus'}
                    width={'100%'}
                />
            </div>
        ),
        Item(
            <div>
                <h2>BFBS Cyprus</h2>
                <p><b>Role: Broadcast technician</b></p>
                <p><b>Dates: </b>April 2021 – present</p>
                <p>
                    BFBS (British Forces Broadcasting Service) is a charity<br></br>providing 
                    radio, TV and entertainment services to members<br></br>of the British 
                    armed forces in the UK and overseas,<br></br>including the Army, Royal 
                    Air Force and the Royal Navy. 
                </p>
                <p>
                    Ross is based at their 
                    base in Cyprus, involved in technical duties including:
                </p>
                <ul>
                    <li>Providing assistance to the presenting team</li>
                    <li>Audio and radio frequency equipment maintenance and administration</li>
                    <li>IT and networking support</li>
                    <li>Logistics operations around the island of Cyprus</li>
                    <li>Liaising with the service delivery team</li>
                    <li>Satellite TV equipment setup</li>
                </ul>
                {/*<FBLike
                    href='https://www.facebook.com/BFBSCyprus'
                    action='like'
                    layout='button_count'
                    locale='en_GB'
                    share={true}
                    showFaces={false}
                />*/}
            </div>
        ),
        Item(
            <div>
                <img
                    src={pubImg('RadioMariaEnglandDesk.jpg')}
                    alt={'Ross at the Radio Maria England On Air desk'}
                    width={'100%'}
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
                    UK,<br></br>producing talk shows and interviews in radio and podcast formats,<br></br>and playing 
                    classic and contemporary Christian music and<br></br>cleverly-selected secular music. They 
                    broadcast on DAB in the<br></br>Cambridgeshire area and on DAB+ in London, as well as online. 
                </p>
                <p>
                    They are part of the larger Radio Maria World Family network,<br></br>headquartered in Erba, 
                    near Milan, Italy.
                </p>
                <p>
                    With the England organisation having formed in late 2019, Ross was 
                    <br></br>only the second member of staff to be based at their new studio.<br></br>The start-up phase 
                    for the station was challenging, with many of the<br></br>usual operations being restricted 
                    because of the COVID-19 pandemic,<br></br>which was at its peak at the time. The staff 
                    frequently praised<br></br>Ross on his ability to cope with difficult circumstances and 
                    handle<br></br>many responsibilities at once. Ross’s responsibilities included:
                </p>
                <ul>
                    <li>Managing the audio, networking and IT equipment in the studio.</li>
                    <li>Training staff and volunteers on operating the studios and on<br></br>audio editing techniques.</li>
                    <li>Assistance to the editorial team.</li>
                    <li>Working with the coordinator to manage liaisons and accounts<br></br>with external companies.</li>
                    <li>Supervising visiting engineers and making risk assessments<br></br>for visitors.</li>
                    <li>Contributing to meetings and handling operational challenges.</li>
                    <li>Liaising with a multi-national team.</li>
                    <li>Receiving extensive online training on broadcasting and<br></br>radio frequency engineering from the Italian team.</li>
                </ul>
                {/*<FBLike
                    href='https://www.facebook.com/radiomariaengland'
                    action='like'
                    layout='button_count'
                    locale='en_GB'
                    share={true}
                    showFaces={false}
                />*/}
            </div>
        )
    ];

    return (
        <div>
            {
                renderElementDiv(
                    items,
                    ['BroadcastPortfolio1', 'BroadcastPortfolio2', 'BroadcastPortfolio3'],
                    props.show,
                    props.colourClassCounter,
                    props.numColumns
                )
            }
        </div>
    );
};

export default PortfolioBroadcasting;