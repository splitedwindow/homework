import { useState } from 'react';
import './App.css';
import WeatherWidget from './components/weather-widget';
import { SnackbarProvider } from 'react-snackbar-messages';
function App () 
{
  const [cityName, setCityName] = useState('Kyiv');
  // onFocus - click on element
  // onBlur - click on other element
  // click on element => onFocus
  // click on element => onFocus => click on other element => onBlur

  const changeCityName = (event) => {
    // event.target -- HTML element where event happened
    const value = event.target.value;
    console.log(value);
    setCityName(value);
  };
  return (
    <SnackbarProvider>
      <div className="App">
        <div className='city-input'>
          <input className='input' onBlur={changeCityName} placeholder="Enter city" />
        </div>
        <WeatherWidget city={cityName} object={this} />
      </div>
    </SnackbarProvider>
  );
}

export default App;
