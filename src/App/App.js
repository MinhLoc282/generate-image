import React, { useCallback, useState } from 'react';

import DalleImage from 'components/DalleImage';

import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = useCallback((e) => {
    setPrompt(e.target.value);
  }, [prompt]);

  return (
    <div className="App">
      <h1>DALL-E API Example</h1>

      <input type="text" placeholder="Enter prompt" onChange={handlePromptChange} />

      <DalleImage prompt={prompt} />
    </div>
  );
}

export default App;
