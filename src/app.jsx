import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/main.scss');

import Title from './components/Title.jsx';
import Weather from './components/Weather.jsx';
import Form from './components/Form.jsx';


const apiKey = 'bcce9d69101131470e5b5c35c4281783';

class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
         temperature:'',
         city:'',
         country:'',
         humidity:'',
         descript:'',
         error:''
     }
   }

   weather = async (e) => {
       e.preventDefault();
       const city = e.target.elements.city.value;
       const country = e.target.elements.country.value;
       const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
       const data = await url.json();
       // console.log(data);
       if(city&&country){
       this.setState({
           temperature: data.main.temp,
           city: data.name,
           country: data.sys.country,
           wind: data.wind.speed,
           descript: data.weather[0].description,
           error:''
       })
       }else{
           this.setState ({
               temperature:'',
               city:'',
               country:'',
               wind:'',
               descript:'',
               error:'Please choose city and country'
           })
       }
   };

   componentWillMount = () => {
       const options = {
           enableHighAccuracy: true,
           timeout: 50000,
           maximumAge: 0
       };
       const that = this;

       async function success(pos) {
           let crd = pos.coords;

           // const link = (`http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=metric`);
           // console.log(`Latitude : ${crd.latitude}`);
           // console.log(`Longitude: ${crd.longitude}`);
           // console.log(`More or less ${crd.accuracy} meters.`);

           const links = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=metric`);
           const datas = links.json();
           // console.log(datas);
           datas.then((result) => {
               // console.log(result);
               // console.log(that);

               that.setState({
                   temperature: result.main.temp,
                   city: result.name,
                   country: result.sys.country,
                   wind: result.wind.speed,
                   descript: result.weather[0].description
               });

           });
       }

       function error(err) {
           console.warn(`ERROR(${err.code}): ${err.message}`);
       }

       navigator.geolocation.getCurrentPosition(success, error, options);
   };

   render() {
       return (
           <div className='main'>
                <Title descript={this.state.descript}/>
                <Form weather={this.weather}/>
               <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} wind={this.state.wind} descript={this.state.descript.toUpperCase()} error={this.state.error}/>

           </div>
       )
   }
}
document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    )
});