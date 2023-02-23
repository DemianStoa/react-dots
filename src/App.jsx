import { useEffect, useState } from 'react'


function App() {
  const [dots, setDots] = useState([])
  const [poppedDots, setPoppedDots] = useState([])

  const handleClick = (e ) => {
    const newDot = {x: e.clientX-33+'px', y: e.clientY-129+"px"}
    setDots([...dots, newDot])
  }
  const handleUndo = () => {
    const length = dots.length
    if(length<1) return dots
   const updatedDots = dots.slice(0,length-1)
   setPoppedDots([...poppedDots, dots[length-1]])
    setDots(updatedDots)
    
  }
  const handleRedo = () => {
    const length = poppedDots.length

    if (length < 1)  return
    const updatedPoppedDots = poppedDots.slice(0,length-1)
    setDots([...dots, poppedDots[length-1]])
    setPoppedDots([...updatedPoppedDots,])
  }

useEffect(() => {
  console.log(dots)
  console.log(poppedDots)
},[dots, poppedDots])

  return (
    <div 
      
      className="app">
        <div className='game'>
        <div className='control'>
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleRedo}>Redo</button>
        </div>
        <div 
        onClick={(e) => {handleClick(e)}} 
        className='board'>
           {dots?.map((cors, index)=>
            <div key={index} className='dot' style={{left: cors.x, top: cors.y}}/>
           ) }
        </div>
        
        </div>

    </div>
  )
}

export default App
