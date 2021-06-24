import React, { useState } from 'react';
import Gallery from './gallery/gallery';
import Fav from './gallery/fav';
import Upload from './gallery/upload';
import './App.css';


function App() {
  const [click,setClick]=useState(false);

  const open_upload=(e)=>{
    e.preventDefault();
    if (e.target.innerHTML=="Admin"){
      e.target.innerHTML="X";
      e.target.style.background="red";
    }
    else {
      e.target.innerHTML="Admin";
      e.target.style.background="orange";
    }
    setClick(!click);
  }

  return (
    <div className="app">
      <h1>BrAnDs GAllErY</h1>
      <button className="btn" onClick={open_upload}>Admin</button>
      {click ? <Upload/> : 
        <>
            <Fav/>
            <Gallery/>
        </>
      }
    </div>
  );
}

export default App;
