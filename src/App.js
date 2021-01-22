import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './Url/baseUrl';
import Characters from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 const [swData, setSWData] = useState([])

 useEffect(() => {
  axios
  .get(`${BASE_URL}${API_KEY}`)
  .then((res) =>{
    setSWData(res.data.results);
console.log(res.data);
console.log(swData);
// console.log(setSWData);
  })
.catch((err) => console.log(err));
 }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <Characters name={swData.name}/> */}
      {swData.map((sw) => {
        return <Characters key={sw.name} name={sw.name} />
      })}
    </div>
    
  );
}

export default App;
