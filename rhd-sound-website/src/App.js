import './App.css';
//import HeaderBar from './components/HeaderBar';
//import SectionBar from './components/SectionBar';
import '@fontsource/exo-2';
//import PortfolioAudio from './elements/Portfolio/PortfolioAudio';
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
          childSections: null
        },
        {
          name: 'About',
          showing: false,
          childSections: null
        },
        {
          // Section names do not have a showing prop, as the pages themselves have this
          name: 'Portfolio',
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
