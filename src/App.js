import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

function App() {
  const APP_ID = 'bfe6a56d';
  const API_KEY = 'abc946d6973b64d9595a57f27fa75591';
  

  useEffect(()=>{
    getRecipes()
  },[])

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button  className='search-button' type='submit'>search</button>
      </form>
    </div>
  );
}

export default App;
