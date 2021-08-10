import React, { Component } from "react";
import { renderElementDiv, Item } from "../global/GlobalFunctions";

export default class Contact extends Component {
    items = [
        Item(
            <div>
                <h2>
                    Get in touch via: <a
                        href={"mailto:ross@rhd-sound.com"}
                    >  
                            ross@rhd-sound.com
                    </a>
                </h2>
            </div>
        )
    ];

    render() {
        return (
            <div>
                {
                    renderElementDiv(
                        this.items,
                        ['Contact1'],
                        { showing: true },
                        this.props.colourClassCounter,
                        this.props.numColumns
                    )
                }
            </div>
        );
    };
};