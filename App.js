import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Hello World from React!'
// );

// const heading = <h1 id='heading'>Hello World from React!!!</h1>;

const TitleComponent = () => <h1>This is the main title of this project</h1>;

const HeadingComponent = () => {
  return (
    <div id='container'>
      <TitleComponent />
      <h1 id='heading'>Hello from the heading Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
