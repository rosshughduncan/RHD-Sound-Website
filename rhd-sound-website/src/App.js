import './App.css';
//import HeaderBar from './components/HeaderBar';
//import SectionBar from './components/SectionBar';
import '@fontsource/exo-2';
import { Component } from 'react';
import MainBody from './components/MainBody';

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
  
  render() {
    return (
      <div>
        <MainBody pageStates={this.state.pageStatuses}/>
      </div>
    );
  };
};

export default App;
