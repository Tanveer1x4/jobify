import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiOutlineHome, AiOutlineForm, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../app/features/userSlice';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="bg-blue-800 text-white py-4 px-6 sm:px-12 lg:px-20 flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold">
          Jobify
        </Link>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div className="hidden sm:flex items-center space-x-8">
          <Link to="/" className="flex items-center text-lg text-center">
            <AiOutlineHome className="text-xl" />
            <span className="ml-2">Home</span>
          </Link>
          <Link to="/form" className="flex items-center text-lg text-center">
            <AiOutlineForm className="text-xl" />
            <span className="ml-2">Job Form</span>
          </Link>
          <Link to="/all" className="flex items-center text-lg text-center">
            <AiOutlineUsergroupAdd className="text-xl" />
            <span className="ml-2">Candidates</span>
          </Link>
        </div>
        <div className="sm:hidden flex items-center space-x-4">
          <Link to="/" className="text-lg">
            <AiOutlineHome className="text-xl" />
          </Link>
          <Link to="/form" className="text-lg">
            <AiOutlineForm className="text-xl" />
          </Link>
          <Link to="/all" className="text-lg">
            <AiOutlineUsergroupAdd className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 hover:text-red-700 text-lg font-medium"
          >
            <RiLogoutBoxLine className="text-xl" />
            <span className="ml-2">Logout</span>
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
