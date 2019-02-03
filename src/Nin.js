import React from 'react';

const Nin=({ninjas}) =>{
    
       
       const ninjaList= ninjas.map(ninja=>{
           return (ninja.age>20)?
           
           (
               <div className="ninja" key={ninja.id}>
            <div>Name:{ninja.name}</div>
            <div>Age:{ninja.age}</div>
            </div>

           ): null;
       
       
       })
        return(
            <div className="ninjalist">
                {ninjaList}

            </div>
            
            
        )
   
}
export default Nin;