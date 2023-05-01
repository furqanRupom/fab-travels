import React, { useContext, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TravelsContext } from "../../providers/Providers";

const Register = () => {
    const {registerUser,displayUserName} = useContext(TravelsContext)
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const [show,setShow] = useState(false);
    const [confirmShow,setConfirmShow]  = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmRef.current.value;
    if(password !== confirmPassword) return
    registerUser(email,password)
    .then(result=>{
        const loggedUser = result.user
        console.log(loggedUser)
        displayUserName(loggedUser,name)
    })
    .catch(error =>{
        console.log(error.message)
    })
    console.log(name,email,password)
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-medium mb-6 text-center">
          Log In to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Enter your Name"
              ref={nameRef}

              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Enter your email address"
              ref={emailRef}

              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                className="w-full  px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Confirm your password"
                ref={passwordRef}

                required
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute right-2 top-3 text-xl text-orange-500 cursor-pointer"
              >
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>
          <div className="mb-6">
          <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
             Confirm Password
            </label>
            <div className="relative">
              <input
                type={confirmShow ? "text" : "password"}
                id="password"
                className="w-full  px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Enter your password"
                ref={confirmRef}
                required
              />
              <div
                onClick={() => setConfirmShow(!confirmShow)}
                className="absolute right-2 top-3 text-xl text-orange-500 cursor-pointer"
              >
                {confirmShow ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg mt-8 hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600 mr-2">Already have an account?</span>
          <Link
            to="/user/login"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
