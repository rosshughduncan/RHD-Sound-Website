import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../App.css';

// Creates an object with JSX elements. By default, the object can be split in two columns in the DOM
export const Item = (thisContent, thisCanSplit = true) => {
    return (
        {
            content: thisContent,
            canSplit: thisCanSplit
        }
    );
};

export const pubImg = (fileName) => {
    return process.env.PUBLIC_URL + '/images/' + fileName;
};

export const renderElementDiv = (items, cssColourClasses, showFlag,
                                 currentColourClass, noColumns) => {
    // Set timing for animations
    const animationTimeObj = {
        appear: 1000,
        enter: 600,
        exit: 100
    };

    // Choose the current colour class to use
    const thisColClass = () => {
        currentColourClass[0] += 1;
        if (currentColourClass[0] >= cssColourClasses.length) {
            currentColourClass[0] = 0;
        }
        return cssColourClasses[currentColourClass].slice(0)
    };

    const getElements = (items) => {
        // Creates the animated div for every element on the page
        const getCSSTransition = (currentItem, index, isFullWidth) => {
            // Set up the classes for the element
            let classNameString;
            if (isFullWidth) {
                classNameString = `ElementDiv ${thisColClass()} FullWidth`;
            }
            else {
                classNameString = `ElementDiv ${thisColClass()}`;
            }

            return (
                // show state is passed in as props
                <CSSTransition
                    in={showFlag.showing}
                    timeout={animationTimeObj}
                    enter
                    appear
                    unmountOnExit
                    classNames={{
                        enter: '',
                        enterActive: 'ElementDivEnter',
                        enterDone: '',
                        appear: '',
                        appearActive: 'ElementDivAppear',
                        appearDone: '',
                        exit: '',
                        exitActive: 'ElementDivClose',
                        exitDone: ''
                    }}
                    key={index}
                >
                        <div className={classNameString}>
                            {currentItem.content}
                        </div>
                </CSSTransition>
            );
        };

        const getMultipleElements = (counter, items) => {
            let splitElements = [];
            for (let i = counter; i < counter + noColumns; i++) {
                splitElements.push(getCSSTransition(items[i], i));
            }
            return splitElements;
        };

        // Split page items into container divs
        let containerDivs = [];
        const itemsLength = items.length;
        for (let i = 0; i < itemsLength; i++) {
            /* Check if there is only one item left, or if the item is set to not split
               then fill that item in one div across the page */
            if (i > itemsLength - noColumns || !items[i].canSplit) {
                containerDivs.push(
                    <div 
                        className='ElementDivContainer'
                        key={i}
                    >
                            {getCSSTransition(items[i], i, true)}
                    </div>
                );
            }
            else {
                /* If there is more than one item left and the item can split,
                   split the items across the page acording to the column setting */
                containerDivs.push(
                    <div
                        className='ElementDivContainer'
                        key={i}
                    >
                            {getMultipleElements(i, items, false)}
                    </div>
                )
                // Counter should be moved forward to prevent duplicate items from being shown
                i += noColumns - 1;
            }
        }
        
        return containerDivs;
    }

    return (
        <div>
            {getElements(items)}
        </div>
    );
}