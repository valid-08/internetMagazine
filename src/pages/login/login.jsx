import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [userName, setuserName] = useState("")
  let [password, setPassword] = useState("")
  let navigation = useNavigate()

  const login = async () => {
    const user = {
      username: userName,
      password: password,
    }
    try {
      let { data } = await axios.post("https://store-api.softclub.tj/Account/login", user)
      localStorage.setItem("access_token", data.data)
      navigation("/")
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-[90%] sm:max-w-sm md:max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-lg my-10 sm:my-16 md:my-20">
        <h1 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-center sm:text-left">
          Log in to Exclusive
        </h1>
        <p className="text-gray-600 mb-4 text-center sm:text-left text-sm sm:text-base">
          Enter your details below
        </p>

        <div className="space-y-3">
          <input
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="UserNmae"
            className="block w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="block w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <button className="block w-full border py-2 rounded-lg hover:bg-gray-100 transition text-[#DB4444] text-sm sm:text-base">
            Forget Password?
          </button>
          <button className="block w-full bg-[#DB4444] text-white py-2 rounded-lg hover:bg-[#DB5554] transition text-sm sm:text-base" onClick={login}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
