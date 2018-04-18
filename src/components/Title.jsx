import React from 'react';
import ReactDOM from 'react-dom';

export class Title extends React.Component {

   constructor(props){
     super(props);
     }
   render() {
     return (
       <div className='title-container'>
           <h1 className='title-container-title'>Weather</h1>
           <p className='title-container-subtitle'>Find out temperature</p>
       </div>
     )
   }
}

export default Title;