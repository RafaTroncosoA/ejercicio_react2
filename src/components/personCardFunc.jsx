import React from 'react';



const PersonCardFunc = props => {    
    return(        
        <div>            
            <h1>{props.apellido}, {props.nombre}</h1>            
            <p>Age: {props.edad}</p>            
            <p>Hair Color: {props.pelo}</p>        
        </div>    
    );
}
export default PersonCardFunc;

