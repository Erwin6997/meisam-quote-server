import React, { useState, useEffect } from 'react';
import Header from './Header';
import Show from './Show'
import './App.css';

function App() {
  const [query , setQuery] = useState("/");
  const [quotes , setQuotes] = useState();
  const urldata = "https://nova-cerulean-throne.glitch.me".concat(query);
  const [valueB , setValueB] = useState(); 
  const add = (value) => {
    setQuery(value)
  }
    useEffect(() => {
      fetch(urldata)
        .then(res => res.json())
        .then(data => {
          setQuotes(data)
          console.log(data)
        });
    }, [urldata]);
    
    return (
      <div>
        <div className="App">
          <Header />
          <button className="btn btn-primary add" onClick={() => {add("/quotes")}}>Show All</button>
          <button className="btn btn-primary add" onClick={() => {add("/quick")}}>Random Lodash</button>
          <button className="btn btn-primary add" onClick={() => {add("/quotes/random")}}>Random</button>
          <p> Search By Character:</p>
          <input name="firstName" type="text"value={valueB} onChange={() => {setQuery("/quotes/search/?term=".concat(valueB))}}/>
          <button className="btn btn-primary add">Search</button>
        </div>
      <Show Data={quotes}/>
      </div>
  );
}

export default App;
