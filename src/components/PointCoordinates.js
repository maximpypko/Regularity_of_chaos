import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 70,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function PointCoordinates({ point, size }) {
  const widthArray = Array.from({length: size.width/5+1 }).map((_,i)=> 0 + i * 5)
  const heightArray = Array.from({length: size.height/5+1 }).map((_,i)=> 0 + i * 5)

  const classes = useStyles();
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        padding="0"
        width="max-content"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="grey.300"
        borderRadius={5}
      >

      <Box p={1}>
        <span>{point}:</span>
      </Box>

      <Box p={1}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Ось X</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
              onChange={handleChange}>
              {
                widthArray.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)
              }
            
          </Select>
        </FormControl>
      </Box>

      <Box p={1}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Ось Y</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}>
              {
                heightArray.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)
              }
          </Select>
        </FormControl>
      </Box>
      </Box> 
    </>
  )
}

export default PointCoordinates;