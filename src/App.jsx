

import React from "react"

const Parent = () => {

  return(
    <div>
      <Greetings name="laptop for rohan" age={2684394884489438}/>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <Parent/>
      
    </div>
  )
}


const Greetings = ({name ,age}) => {


  return(
    <div>
     <p>{name} </p> 
      {age}
    </div>
  )
}

export default App;