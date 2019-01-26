import React from 'react';

const Nin=(props) =>{
    
       const {ninjas}=props;
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