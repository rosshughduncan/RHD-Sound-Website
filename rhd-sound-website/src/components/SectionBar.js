import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { ThemeProvider } from "styled-components";
import { selectedSection, unselectedSection } from "../global/BarThemes";
import '../App.css';

export default class SectionBar extends Component {
    sectionMenuItemsReturn = () => {
        // Start with empty list which items will be added to
        let sectionMenuItems = [];

        // Timing for section animations
        const animationSectionTimeObj = {
            appear: 1000,
            enter: 600,
            exit: 100
        };

        const pageStatesObjLength = this.props.pageStates.sections.length;
        
        // div style for each menu item
        const SectionMenuItem = styled.div`
            display: inline-block;
            color: #050F09;
            background-color: ${props => props.theme.col};
            text-align: center;
            padding-top: 0.4rem;
            padding-bottom: 0.4rem;
            margin-left: 1.5rem;
            margin-top: 1.5rem;
            width: ${100 / (pageStatesObjLength + 1)}%;
            font-weight: bold;
            transition: 0.75s;
            &hover: {
                background-color: ${props => props.theme.hoverCol};
                cursor: pointer;
            }
            border-style: outset;
            border-radius: 0.4rem;
            border-width: 0.2rem;
            padding-top: 0.05rem;
            padding-right: 0.7rem;
            padding-bottom: 0.05rem;
        `;

        let sectionState;
        for (let indx = 0; indx < pageStatesObjLength; indx++) {
            sectionState = this.props.pageStates.sections[indx];
            sectionMenuItems.push(
                <CSSTransition
                    in={sectionState.selectable}
                    timeout={animationSectionTimeObj}
                    enter
                    unmountOnExit
                    classNames={{
                        enter: '',
                        enterActive: 'SectionDivEnter',
                        enterDone: '',
                        exit: '',
                        exitActive: 'SectionDivClose',
                        exitDone: ''
                    }}
                    key={`s${indx}-CSSTransition`}
                >
                        <ThemeProvider
                            theme={() => {
                                if (sectionState.showing) {
                                    return selectedSection;
                                }
                                else {
                                    return unselectedSection;
                                }
                            }}
                            key={`s${indx}-ThemeProvider`}
                        >
                                <SectionMenuItem
                                    onClick={() => {
                                        this.props.buttonClicked(indx)}
                                    }
                                    key={`s${indx}-MenuItem`}
                                >
                                        {sectionState.name}
                                </SectionMenuItem>
                        </ThemeProvider>
                </CSSTransition>  
            );
        }

        return sectionMenuItems;
    }
    
    render() {
        return (
            <div className={'App SectionMenuItem'}>
                {this.sectionMenuItemsReturn()}
            </div>
        );
    };
};