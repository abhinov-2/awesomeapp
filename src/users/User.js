import React from 'react';
import '../App.css';


const User = (props) => {


            return (
            <div>
            <h2 className = 'colour_it'>Name : {props.children} | Age :{props.age}</h2>
            </div> 

       )
   

}


export default User; 