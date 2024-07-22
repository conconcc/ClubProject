import * as React from 'react';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/main' element={<Main />} />
      </Routes>
    </div >
  )
}

export default App;
