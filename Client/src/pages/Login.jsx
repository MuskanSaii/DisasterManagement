import React from 'react';
import { toast } from 'react-hot-toast'; // Import toast

const Login = () => {
  const notify = () =>
    toast.success('Successfully created!');
  return (
    <div>
      <button onClick={notify}>Show Toast</button>
    </div>
  );
};

export default Login;
