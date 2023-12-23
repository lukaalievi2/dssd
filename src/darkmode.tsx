import React, { useState, useCallback } from 'react';
type Color = 'white' | 'black';

const useDarkToggle = (initialColor: Color) => {
  const [dark, setDark] = useState<Color>(initialColor);

  const toggleDark = useCallback(() => {
    setDark((prevColor) => (prevColor === 'white' ? 'black' : 'white'));
  }, []);

  return [dark, toggleDark] as const;
};

const App: React.FC = () => {
  const [dark, toggleDark] = useDarkToggle('white');

  return (
    <div
      style={{
        backgroundColor: dark,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={toggleDark}>dark mode</button>
    </div>
  );
};

export default App;
