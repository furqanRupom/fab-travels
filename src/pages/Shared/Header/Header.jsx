import React from "react";
import logo from "../../../assets/travelss.png";
import { FaSearch ,FaUser,FaSignOutAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TravelsContext } from "../../../providers/Providers";

const Header = () => {
  const {user, logOut} = useContext(TravelsContext);
  const handleLogOut = ()=>{
    logOut().then(result=> console.log(result.user)).catch(error => console.log(error.message))
  }
  return (
    <header className="max-w-7xl mx-auto font-Nunito-sans py-6">
      <div className="flex items-center space-x-4">
        <div className="">
          <img className="w-64 object-cover" src={logo} alt="" />
        </div>

        <div className="flex justify-between w-full">
          <div className="relative max-w-sm w-full text-white">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 bg-opacity-20 border border-gray-300 text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 placeholder:text-white"
              placeholder="Search"
              required
            />
          </div>

          <nav className="text-white">
            <ul className="flex items-center space-x-4">
              <Link to="/">News</Link>
              <li>Destination</li>
              <li>Blog</li>
              <li>Contact</li>
              {
                user ? <div className="text-orange-500  space-x-4 font-bold flex items-center">
                  <FaUser />
                  <div>
                  {user.displayName}
                  </div>
                  <button onClick={ handleLogOut} className="text-xl">
                  <FaSignOutAlt />
                  </button>
                  </div> :
                <li className="bg-orange-500 px-5 py-2">
                <Link to="/user/login">Login</Link>
              </li>
              }

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
