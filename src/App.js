import React,  {useEffect, useState} from "react";

function App() {
  const [totalTimeInsecondes, settotalTimeInsecondes] = useState((5)) 

  const minutes = Math.floor (totalTimeInsecondes / 60)
  const seconds = totalTimeInsecondes % 60

  useEffect(() => {
    if(totalTimeInsecondes === 0) {
      alert("O tempo acabou!")
        return
    }else {
      setTimeout(() => {
        settotalTimeInsecondes(totalTimeInsecondes - 1)
  
      }, 1000)

    }
  }, [totalTimeInsecondes])



  return (
    <div>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    
    </div>
  );
}

export default App;
