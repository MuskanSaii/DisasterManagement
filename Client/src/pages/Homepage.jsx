import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-yellow-200 p-8 rounded-lg shadow-lg text-center space-y-4">
    <h1 className="text-xl font-bold text-gray-800">Home Page</h1>
    <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">
      <Link to="/abc">Go to Next Page</Link>
    </button>
  </div>
  </div>
  )
}

export default Homepage