import React, { useContext, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link ,useLocation , useNavigate} from "react-router-dom";
import { TravelsContext } from "../../providers/Providers";


const Login = () => {
  const { LoginUser } = useContext(TravelsContext);
  const [show, setShow] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const handleSubmit = (e) => {
    e.preventDefault();
    const From = e.current
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    LoginUser(email, password)
      .then((result) => {
        console.log(result.user)
        navigate(from,{replace:true})
        From.reset()
    })
      .catch((error) => console.log(error.message));
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
                placeholder="Enter your password"
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
          <div className="flex items-center justify-between">
            <label htmlFor="remember" className="text-gray-700 font-medium">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
                name="remember"
              />
              Remember Me
            </label>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg mt-8 hover:bg-orange-600"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600 mr-2">Don't have an account?</span>
          <Link
            to="/user/register"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
