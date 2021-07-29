import React from 'react';
import { Item, pubImg, renderElementDiv } from '../global/GlobalFunctions';

const Welcome = (props) => {
    const items = [
        Item(
            <div>
                <h1>Welcome to RHD Sound</h1>
                <h2>
                    Ross Duncan. Audio engineer, IT technician, 
                    broadcast engineer, events technician, music 
                    producer and developer.
                </h2>
            </div>
        ),
        Item(
            <div>
                <img
                    src={pubImg('Welcome.jpg')}
                    alt={"Welcome to RHD Sound"}
                    /*width={`${1 / props.numColumns * 100}%`}*/
                    width={'100%'}
                />
            </div>
        ),
        Item(
            <div>
                <p>
                    RHD Sound showcases the projects of Ross Duncan, 
                    a multi-skilled technical skills provider 
                    specialising in professional audio from the UK. He has provided 
                    enhanced skills in music mixing and mastering, 
                    broadcast production, live sound, lighting 
                    programming and crew labour to the industry since 
                    2018, with instilled interest from an early age.
                </p>
                <p>
                    If you have a creative broadcasting, music, video 
                    or events project, Ross can bring capable hands to 
                    help on many different aspects of the job. Grab a 
                    beverage, get exploring the portfolio and fill in the 
                    Contact form for enquiries or just for a chat!
                </p>
            </div>
        )
    ];

    return (
        <div>
            {renderElementDiv(
                items,
                ['Welcome1', 'Welcome2', 'Welcome3'],
                props.show,
                props.colourClassCounter,
                props.numColumns
            )}
        </div>
    );
};

export default Welcome;