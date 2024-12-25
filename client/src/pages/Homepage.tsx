import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { Button } from '../components/ui/button';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading,setUser } = useAuth(); // Access loading state
  useEffect(()=>{
     if(!user){
      navigate('/login')
     }
  })
  if (loading) {
    // Display a loading indicator or nothing until loading is complete
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-yellow-200 p-8 rounded-lg shadow-lg text-center space-y-4">
        <h1 className="text-xl font-bold text-gray-800">Home Page</h1>
        {user ? (
          <p className="text-gray-700">
            Welcome, {user.name} ({user.email})!
            <Button onClick={()=>{
              setUser(null);
              localStorage.clear();
              navigate('/login')
            }}>logout</Button>
          </p>
        ) : (
          <p className="text-gray-700">User not authenticated.</p>
        )}
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">
          <Link to="/login">Go to Next Page</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
