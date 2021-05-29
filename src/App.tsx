import { Component } from './Component';
import { useState } from 'react';

function App() {
  const [state, setState] = useState<string>('');
  return (
    <div className="App">
      <h1>Hello React TypeScript</h1>
      <Component label='labelでbutton' />
      <Component>childrenでbutton</Component>
    </div>
  );
}

export default App;
