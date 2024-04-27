import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';
//import Sidebar from './Sidebar'; 

function App() {
  const { auth } = useSelector(state => state);
  return (
    <Router> {/* Use Router component */}
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <> 
         {/*<Sidebar />*/}
          {/* Other components/routes */}
        </>
      )}
    </Router>
  );
}

export default App;


