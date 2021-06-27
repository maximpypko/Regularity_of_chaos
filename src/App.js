import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Nav from './containers/Nav';
import Container from '@material-ui/core/Container';
import Description from "./components/Description";
import Greeting from './components/Greeting';
import Video from './components/Video';
import Prepresentation from './containers/Prepresentation';

export default function App() {
  
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="xl">
      <AppBar position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Приветствие" />
          <Tab label="Инструкция" />
          <Tab label="Презентация" />
          <Tab label="Item Three" />
          <Tab label="Видео" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}>
        <Nav value={value} index={0}>
          <Greeting />
        </Nav>
        <Nav value={value} index={1}>
          <Description />
        </Nav>
        <Nav value={value} index={2}>
          <Prepresentation/>
        </Nav>
        <Nav value={value} index={3}>
          Item Three
        </Nav>
        <Nav value={value} index={4}>
          <Video/>
        </Nav>
      </SwipeableViews>
    </Container>
  );
}