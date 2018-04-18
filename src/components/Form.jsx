import React from 'react';
import ReactDOM from 'react-dom';

export class Form extends React.Component {

   constructor(props){
     super(props);
     }
   render() {
     return (
         <form onSubmit={this.props.weather}>
             <input type="text" name='city' placeholder='city'/>
             <input type="text" name='country' placeholder='country'/>
             <button>Get weather</button>
         </form>
     )
   }
}

export default Form;