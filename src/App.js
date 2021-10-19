import React,{useState} from 'react';
import './App.css';

function App() {
  const [query, setQuery] =useState(' ');
  const [weather, setWeather] =useState();


const search = e =>{
  if (e.key === "Enter"){
fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
.then(res => res.json())
.then(result => {
  setQuery(' ');
  setWeather(result);
});
  }
}

  const api ={
    key:"2105689b44bdbd019d8869d0bbe78428",
    base:"https://api.openweathermap.org/data/2.5/"
  }

const dateBuilder = (d) =>{
let months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];
let days =['Monday','Tuesday','Wednesday','Thurday','Friday','Saturday','Sunday'];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();


return `${day} ${date} ${month} ${year}`;
}

return (
  <div className={`app ${weather?.main?.temp > 16 ? 'app.warm':'app'}`}>
    <main>
 
    <div className="search-box">
 
      <input type='text' 
       className='search-bar' 
       placeholder='Search ...'
       onChange={e => setQuery(e.target.value)}
       value={query}
       onKeyPress={search}
       />
     </div>
     
     {weather?.main && (
      <div>
       <div className='location-box'>
       <div className='location'>{weather.name}, {weather.sys.country}</div>
       <div className='date'>
         {dateBuilder(new Date())}
       </div>
       </div>
       <div className='weather-box'>
       <div className='temp'>
       {Math.round(weather.main.temp)} ℃
       </div>
       <div className='weather'>
       {weather.weather[0].main} 
       </div>
     
       </div>
      </div>
     )}
   </main>
    </div>
   );
   }

export default App;
