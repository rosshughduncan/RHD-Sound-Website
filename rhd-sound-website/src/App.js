import './App.css';
import '@fontsource/exo-2';
import { Component } from 'react';
import MainBody from './components/MainBody';
import HeaderBar from './components/HeaderBar';
import SectionBar from './components/SectionBar';
//import { selected } from './global/BarThemes';

class App extends Component {
  state = {
    // States for each page, with separate lists for headers (with no sub-pages) and sections
    pageStatuses: {
      headers: [
        {
          name: 'Welcome',
          showing: true,
        },
        {
          name: 'About',
          showing: false,
        },
        {
          /* Section names have a showing prop to indicate that they are highlighted
             but do not show in the main body */
          name: 'Portfolio',
          showing: false,
          // Child sections are accessed using a try statement
          childSections: [0, 1, 2, 3]
        }
      ],
      sections: [
        {
          name: 'Audio',
          showing: false
        },
        {
          name: 'Video',
          showing: false
        },
        {
          name: 'Events',
          showing: false
        },
        {
          name: 'Broadcasting',
          showing: false
        }
      ]
    }
  };
  
  headerBarClickHandler = (selectedHeaderIndex) => {
    // Copy state
    let newState = Object.assign({}, this.state);

    // Set all headers before the selected header to showing: false
    for (let i = 0; i < selectedHeaderIndex; i++) {
      console.log(`current index: ${i}`);
      newState.pageStatuses.headers[i].showing = false;
    }

    // Set the selected header to showing: true
    newState.pageStatuses.headers[selectedHeaderIndex].showing = true;

    /* Set all headers after the selected header to showing: false
       ensuring there's no index out of bounds error */
    const headersLength = this.state.pageStatuses.headers.length;
    const nextIndex = selectedHeaderIndex + 1;
    if (nextIndex < headersLength) {
      for (let j = nextIndex; j < headersLength; j++) {
        newState.pageStatuses.headers[j].showing = false;
      }
    }

    this.setState(newState);
  };
  
  render() {
    return (
      <div>
        <HeaderBar
          pageStates={this.state.pageStatuses}
          buttonClicked={this.headerBarClickHandler}
        />
        <SectionBar pageStates={this.state.pageStatuses}/>
        <MainBody pageStates={this.state.pageStatuses}/>
      </div>
    );
  };
};

export default App;
