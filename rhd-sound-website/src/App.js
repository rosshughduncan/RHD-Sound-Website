import './App.css';
//import HeaderBar from './components/HeaderBar';
//import SectionBar from './components/SectionBar';
import '@fontsource/exo-2';
//import PortfolioAudio from './elements/Portfolio/PortfolioAudio';
import { Component } from 'react';
import MainBody from './components/MainBody';

class App extends Component {
  state = {
    // Set home page
    headerBarSelection: 0,
    sectionBarSelection: 0
  };
  
  render() {
    return (
      <div>
        {/*<HeaderBar selectedHeader={this.state.headerBarSelection}/>
        <SectionBar selectedSection={this.sectionBarSelection}/>
        <MainBody
          selctedHeader={this.state.headerBarSelection}
          selectedSection={this.state.sectionBarSelection}
        />
        <Contact/>*/}

        {/* TESTING ONLY */}

        <MainBody/>

      </div>
    );
  };
}

export default App;
