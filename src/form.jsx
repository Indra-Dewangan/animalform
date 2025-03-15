import React, { useState } from "react";

export function Forms() {
  
    const [name , setname] = useState(null);
    const [number , setnumber] = useState(null);
    const [email , setemail] = useState(null);
    const [breed , setbreed] = useState(null);

    return(
        <div>
         
        name :  <input type="text" placeholder="Name"  value={name}  onChange={(e)=> setname(e.target.value)}/>
        Phone Number :<input type="text" placeholder="Phone No" />
        Email :  <input type="text" placeholder="Email" />
        Dog Breed :  <input type="text" placeholder="Dog Breed" />
        
        </div>
    )

}

export default Forms;