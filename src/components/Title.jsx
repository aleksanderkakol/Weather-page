import React from 'react';
import ReactDOM from 'react-dom';
import WeatherIcons from './WeatherIcons.jsx';

export class Title extends React.Component {

   constructor(props){
     super(props);
     }
   render() {
     return (
       <div className='title-container'>
           <h1 className='title-container-title'>Weather</h1>
           <p className='title-container-subtitle'>Check out temperature</p>
           <WeatherIcons descript={this.props.descript}/>
       </div>
     )
   }
}
export default Title;