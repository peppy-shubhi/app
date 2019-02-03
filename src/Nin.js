import React from 'react';

const Nin=({ninjas}) =>{
    
       
       const ninjaList= ninjas.map(ninja=>{
           if(ninja.age>20)
           {
           return (
               <div className="ninja" key={ninja.id}>
            <div>Name:{ninja.name}</div>
            <div>Age:{ninja.age}</div>
            </div>

           )
       }
       else return null
       })
        return(
            <div className="ninjalist">
                {ninjaList}

            </div>
            
            
        )
   
}
export default Nin;