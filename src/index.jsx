import React from 'react';
import ReactDOM from 'react-dom';

// Import Javascript module
import createMyModule from './myModule.jsx';

// Import React component
import MyComponent from "./MyComponent.jsx";

const a = createMyModule();
a.init();
a.someBehaviour();

ReactDOM.render(
  <MyComponent />, 
  document.getElementById("reactContainer")
);