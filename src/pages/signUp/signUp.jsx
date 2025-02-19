import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-2">Create an account</h1>
        <p className="text-gray-600 text-center mb-4">Enter your details below</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Email or phone number"
            className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />

          <button className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Create Account
          </button>
          <button className="block w-full border py-3 rounded-lg hover:bg-gray-100 transition">
            Sign up with Google
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm sm:text-base">
          Already have an account?
          <Link to="/login" className="text-blue-600 hover:underline ml-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
