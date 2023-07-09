import React, { useEffect } from 'react';

import Profile from './profile'
import AnalysisContain from './AnalysisContain'
import Navbar from './Navbar'
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  function onClick() {
    alert("Button clicked!");
  }
  const his=useNavigate();
  const user=auth?.currentUser?.uid;
  useEffect(()=>{
    console.log('home',user)
    if(!user){
      his('/register');
    }
  },[])
  return (
    <div className="home">
      {/* <h1>hi</h1> */}
    <Profile />
    {/* <AnalysisContain /> */}
    <div>
      
    </div> 
        
      
      
    </div>
  );
};

export default Home;