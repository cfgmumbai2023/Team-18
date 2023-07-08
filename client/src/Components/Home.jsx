import React from 'react';

import Profile from './Profile'
import AnalysisContain from './AnalysisContain'



const Home = () => {
  function button1Clicked() {
    alert("Button 1 clicked!");
  }
  
  function button2Clicked() {
    alert("Button 2 clicked!");
  }
  return (
    <div className="home">
      <button onclick="button1Clicked()">Add New Student</button>
  <button onclick="button2Clicked()">Edit</button>
  
  
    
    <Profile />
    <AnalysisContain />  
    </div>
  );
};

export default Home;