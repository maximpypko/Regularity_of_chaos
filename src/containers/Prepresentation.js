import Canvas from "./Canvas";
import PointCoordinates from "../components/PointCoordinates";
import Box from '@material-ui/core/Box';

function Prepresentation() {
  const canvasSize = {
    width:800,
    height:600,
  }
  
  return (
    <>
      <h2>Выберите координаты точек</h2>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <PointCoordinates point="A" size={canvasSize}/>
        <PointCoordinates point="B" size={canvasSize}/>
        <PointCoordinates point="C" size={canvasSize}/>
      </Box>
      {/* <Canvas/> */}
    </>
  )
}
export default Prepresentation;