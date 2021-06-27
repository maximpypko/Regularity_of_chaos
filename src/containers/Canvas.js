import React, { useRef } from 'react'

function Canvas(props) {

  const canvasRef = useRef(null)
  // const canvas = canvasRef.current

  return (
    <canvas background='red' ref={canvasRef} {...props}/>
  )
}
export default Canvas;