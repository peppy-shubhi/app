import React from 'react';

const Nin=({ninjas, delete_en}) =>{
    
       
       const ninjaList= ninjas.map(ninja=>{
           return (ninja.age>20)?
           
           (
               <div className="ninja" key={ninja.id}>
            <div>Name:{ninja.name}</div>
            <div>Age:{ninja.age}</div>
            <button onClick={()=>{delete_en(ninja.id)}}>Deleteit</button>
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