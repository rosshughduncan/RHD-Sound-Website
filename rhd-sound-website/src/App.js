import './App.css';
import '@fontsource/exo-2';
import React, { Component } from 'react';
import MainBody from './components/MainBody';
import HeaderBar from './components/HeaderBar';
import SectionBar from './components/SectionBar';

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
          showing: false,
          selectable: false,
          linkedHeader: 2
        },
        {
          name: 'Video',
          showing: false,
          selectable: false,
          linkedHeader: 2
        },
        {
          name: 'Events',
          showing: false,
          selectable: false,
          linkedHeader: 2
        },
        {
          name: 'Broadcasting',
          showing: false,
          selectable: false,
          linkedHeader: 2
        }
      ],
      currentChildSectionsActive: null
    }
  };

  setHeaderAndSectionFalse = (indx, newStateObj) => {
    // Set this header to not showing
    newStateObj.pageStatuses.headers[indx].showing = false;

    // Set any sections belonging to the header to false as well
    try {
      newStateObj.pageStatuses.headers[indx].childSections.forEach(indxChildSection => {
        newStateObj.pageStatuses.sections[indxChildSection].showing = false;
        newStateObj.pageStatuses.sections[indxChildSection].selectable = false;
      });
    }
    // Reaching here means header has no sections belonging to it
    catch(e) {}
  };

  setHeaderAndSectionTrue = (indx, newStateObj) => {
    newStateObj.pageStatuses.headers[indx].showing = true;
    
    // Make any sections belonging to this header selectable
    try {
      newStateObj.pageStatuses.headers[indx].childSections.forEach(indxChildSection => {
        /* Only make the sections selectable
           Whether the section page is showing or not is determined in the SectionBar */
        newStateObj.pageStatuses.sections[indxChildSection].selectable = true;
        newStateObj.pageStatuses.sections[indxChildSection].showing = false;
      })
      newStateObj.pageStatuses.currentChildSectionsActive = newStateObj
                                                              .pageStatuses
                                                              .headers[indx]
                                                              .childSections;
    }
    catch(e) {}
  };

  setChildSections = (indx, newStateObj) => {
    newStateObj.pageStatuses.sections[
      newStateObj.pageStatuses.currentChildSectionsActive[indx]
    ].showing = false;
  };
  
  headerBarClickHandler = (selectedHeaderIndex) => {
    // Copy state
    let newState = Object.assign({}, this.state);

    // Set all headers before the selected header to showing: false
    for (let i = 0; i < selectedHeaderIndex; i++) {
      this.setHeaderAndSectionFalse(i, newState);
    }

    // Set the selected header to showing: true
    this.setHeaderAndSectionTrue(selectedHeaderIndex, newState);

    /* Set all headers after the selected header to showing: false
       ensuring there's no index out of bounds error */
    const headersLength = this.state.pageStatuses.headers.length;
    const nextIndex = selectedHeaderIndex + 1;
    if (nextIndex < headersLength) {
      for (let j = nextIndex; j < headersLength; j++) {
        this.setHeaderAndSectionFalse(j, newState);
      }
    }

    this.setState(newState);
  };

  sectionBarClickHander = (selectedSectionIndex) => {
    let newState = Object.assign({}, this.state);

    // Make the header page for this section invisible
    newState.pageStatuses.headers[
      newState.pageStatuses.sections[selectedSectionIndex].linkedHeader
    ].showing = false;
    
    // Set all sections to selectable: false, except the one selected
    let indexOfSelectedSectionIndex = newState
                                        .pageStatuses
                                        .currentChildSectionsActive
                                        .indexOf(selectedSectionIndex);
    
    for (let i = 0; i < indexOfSelectedSectionIndex; i++) {
        this.setChildSections(i, newState);
    }

    newState.pageStatuses.sections[selectedSectionIndex].showing = true;

    const sectionsLength = newState.pageStatuses.currentChildSectionsActive.length;
    const nextIndex = indexOfSelectedSectionIndex + 1;
    if (nextIndex < sectionsLength) {
      for (let j = nextIndex; j < sectionsLength; j++) {
        this.setChildSections(j, newState);
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
        <SectionBar
          pageStates={this.state.pageStatuses}
          buttonClicked={this.sectionBarClickHander}
        />
        <MainBody pageStates={this.state.pageStatuses}/>
      </div>
    );
  };
};

export default App;
