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
          showing: true
        },
        {
          name: 'About',
          showing: false
        },
        {
          // Section names do not have a showing prop, as the pages themselves have this
          name: 'Portfolio'
        }
      ],
      sections: [
        {
          name: 'Audio',
          showing: false,
          parentHeader: 2
        },
        {
          name: 'Video',
          showing: false,
          parentHeader: 2
        },
        {
          name: 'Events',
          showing: false,
          parentHeader: 2
        },
        {
          name: 'Broadcasting',
          showing: false,
          parentHeader: 2
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
