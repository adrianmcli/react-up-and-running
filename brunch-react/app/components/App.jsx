import React from 'react';
import MyButton from './MyButton';

const App = () =>
  <div id="content">
    <h1>&nbsp;</h1>
    <h2>Welcome!</h2>
    <ul>
      <li><a href="http://brunch.io">Brunch homepage</a></li>
      <li><a href="https://facebook.github.io/react/">React.js homepage</a></li>
    </ul>
    <MyButton />
  </div>;

export default App;
