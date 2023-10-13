import React, { Component, createFactory } from 'react';

import './App.css';
import { Toolbar } from './components/Toolbar';
import VideoConference from'./components/VideoConference';


function App() {
  {
    return (


      <>
          <Toolbar />
          <main style={{marginTop:'4px'}}>
          
          <VideoConference />
          </main>
      </>

    );
  }
}
export default App;
