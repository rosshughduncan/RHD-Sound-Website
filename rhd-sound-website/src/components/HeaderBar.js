import { Component } from "react";
//import { CSSTransition } from "react-transition-group";
import styled, { ThemeProvider } from 'styled-components';
import { selected, unselected } from "../global/BarThemes";
import { pubImg } from "../global/GlobalFunctions";

export default class HeaderBar extends Component {
    menuItemsReturn = () => {
        // List for storing the menu items
        let menuItems = [
            <img
                src={pubImg('Logo.png')}
                alt='Logo'
                width='240px'
                height='36px'
                style={{
                    'display': "inline-block",
                    'paddingTop': '0.4rem',
                    'paddingBottom': '0.4rem',
                    'marginLeft': '1.5rem',
                    'marginTop': '1.5rem'
                }}
                key={'LogoImage'}
            />
        ];
        
        // Find number of menu items. Will have 1 added as photo wil be part of menu bar
        const numMenuItems = this.props.pageStates.headers.length + 1;

        // div for each menu item
        const MenuItem = styled.div`
            display: inline-block;
            color: ${props => props.theme.col};
            text-align: center;
            padding-top: 0.4rem;
            padding-bottom: 0.4rem;
            margin-left: 1.5rem;
            margin-top: 1.5rem;
            width: ${100 / numMenuItems}%;
            font-weight: bold;
            transition: 0.25s;
            &hover: {
                color: ${props => props.theme.hoverCol};
                cursor: pointer;
            }
            border-style: outset;
            border-radius: 0.4rem;
            border-width: 0.2rem;
            padding-top: 0.05rem;
            padding-right: 0.7rem;
            padding-bottom: 0.05rem;
        `;

        // Create menu items after the logo
        for (let indx = 0; indx < this.props.pageStates.headers.length; indx++) {
            let headerState = this.props.pageStates.headers[indx];
            menuItems.push(
                <ThemeProvider
                    theme={() => {
                        if (headerState.showing) {
                            return selected;
                        }
                        else {
                            return unselected;
                        }
                    }}
                    key={`h${indx}-ThemeProvider`}
                >
                        <MenuItem
                            onClick={() => this.props.buttonClicked(indx)}
                            key={`h${indx}-MenuItem`}
                        >
                                {headerState.name}
                        </MenuItem>
                </ThemeProvider>
            );
        }

        return menuItems;
    };

    render() {
        return (
            <div className={'App MenuItem'}>
                {this.menuItemsReturn()}
            </div>
        );
    };
};