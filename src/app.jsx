import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/main.scss');

import Title from './components/Title.jsx';
import MyComponent from './components/Fonts.jsx';
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
       const url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
       const data = await url.json();
       console.log(data);
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

   render() {
       return (
           <div>
                <Title />
                {/*<MyComponent style={{}} />*/}
                <Form weather={this.weather} />
               <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} wind={this.state.wind} descript={this.state.descript} error={this.state.error}/>
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
