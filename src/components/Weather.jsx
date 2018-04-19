import React from 'react';
import ReactDOM from 'react-dom';

export class Weather extends React.Component {

   constructor(props){
     super(props);
     }
   render() {
     return (
       <div className='weather'>
           {this.props.city&&this.props.country&&<p>Location: {this.props.city}, {this.props.country}</p>}
           {this.props.temperature&&<p>Temperature: {this.props.temperature} &deg;C</p>}
           {this.props.wind&&<p>Wind: {this.props.wind} m/s</p>}
           {this.props.descript&&<p>Conditions: {this.props.descript}</p>}
           {this.props.error&&<p>{this.props.error}</p>}
       </div>
     )
   }
}

export default Weather;