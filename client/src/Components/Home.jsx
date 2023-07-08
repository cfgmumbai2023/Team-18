import React from 'react';

import Profile from './Profile'
import AnalysisContain from './AnalysisContain'
import Navbar from './Navbar'


const Home = () => {
  function onClick() {
    alert("Button clicked!");
  return (
    <div className="home">

     
     <Navbar />
    <Profile />
    <AnalysisContain />
    <div>
      <button className='add-stu'
        onClick={addStudent()}> Add a Student</button>
      <button> Add a Student</button>
    </div> 
        
      
      
    </div>
  );
};

export default Home;