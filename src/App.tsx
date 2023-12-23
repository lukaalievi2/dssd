import React from 'react';
import Header from './navigation';
import TodoApp from './todoApp';
import Products from './market';


function App() {
  return (
    <div className="App">
      <TodoApp />
      <Products/>    
      <Header/>  
    </div>

  );
}

export default App;
