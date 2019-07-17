import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      
      <div className="block">
        <textarea className="text-area" rows="10" placeholder="Insert your text here and click 'Add Text'!" />
        <button className="btn">Add Text</button>
      </div>
      
      <div className="block">
        <div className="colors">
          <button className="btn red">Red</button>
          <button className="btn yellow">Yellow</button>
          <button className="btn green">Green</button>
        </div>
        <div className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      
      <div className="block">
        <div className="colors">
          <button className="btn red">Red</button>
          <button className="btn yellow">Yellow</button>
          <button className="btn green">Green</button>
        </div>
        <div className="text">
          Plese select a color to list selected text!
        </div>
      </div>
    </div>
  );
}

export default App;
