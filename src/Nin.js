import React from 'react';

const Nin=({ninjas}) =>{
    
       
       const ninjaList= ninjas.map(ninja=>{
           return (
               <div className="ninja" key={ninja.id}>
            <div>Name:{ninja.name}</div>
            <div>Age:{ninja.age}</div>
            </div>

           )
       })
        return(
            <div className="ninjalist">
                {ninjaList}

            </div>
            
            
        )
   
}
export default Nin;