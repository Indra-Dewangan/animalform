import React from "react";
import Forms from "./form";
const Apps = ({name},{number} , {email} , {breed}) => {



    return(
        <div>
                <p>name : {name}</p>
                <p>number : {number}</p>
                <p>email: {email}</p>
                <p>breed : {breed}</p>

        </div>
    )
}

export default App ;