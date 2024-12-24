
  



import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LiveFeed from './pages/LiveFeed';
import Login from './pages/Login';

const App = () => {
  return (
  
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={<Homepage/>}
        />
        
     
        <Route
          path="/abc"
          element={
            <LiveFeed/>
          }
        />
        <Route 
        path='/login'
        element={<Login/>}
        />
      </Routes>
 
  );
};

export default App;
