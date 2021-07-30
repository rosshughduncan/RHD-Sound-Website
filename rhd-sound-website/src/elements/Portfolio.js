import React from 'react';
import { Item, renderElementDiv, pubImg } from '../global/GlobalFunctions';

const Portfolio = (props) => {
      const items = [
        Item(
            <div>
                <h1>Discover the Portfolio</h1>
            </div>
        , false),
        Item(
            <div>
                <p>Click one of the buttons above to explore the various sections of the RHD Sound portfolio.</p>
            </div>
        ),
        Item(
            <img
                src={pubImg('LogicShot.jpg')}
                alt={"Shot of Logic Pro X"}
                width={'100%'}
            />
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

export default Portfolio