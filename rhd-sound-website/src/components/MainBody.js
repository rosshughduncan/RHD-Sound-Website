import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import VideoJSPlayer from "../global/VideoJSPlayer";
import { pubImg } from "../global/GlobalFunctions";

export default class MainBody extends Component {
    // VideoJS options template for all pages which use it
    videoJsOptions = (source) => {
    return ({
        autoplay: false,
        controls: true,
        sources: [{
            src: pubImg(source),
            type: 'video/mp4'
        }]
    });
    }

    render() {
        return (
            <div>
                
            </div>
        );
    };
};