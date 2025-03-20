import React, { useState } from "react";
import Apps from "./table"

export function Forms() {
  
    const [name , setname] = useState(null);
    const [number , setnumber] = useState(null);
    const [email , setemail] = useState(null);
    const [breed , setbreed] = useState(null);

    return(
        <div>
         
        name :  <input type="text" placeholder="Name"   value={setname(name)} name={name}/>
        Phone Number :<input type="text" placeholder="Phone No"  value={setnumber(number)} number={number} />
        Email :  <input type="text" placeholder="Email" value={setemail(email)} email={email}/>
        Dog Breed :  <input type="text" placeholder="Dog Breed"  value={setbreed(breed)} breed={breed}/>
        
        </div>
    )

}
export default Forms;
