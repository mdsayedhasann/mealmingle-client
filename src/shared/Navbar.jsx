import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Logout Success",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }

    const links = <>
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>
        <NavLink to='/availableFoods'>Available Foods</NavLink>
    </li>
    <li>
        <NavLink to='/addFood'>Add Food</NavLink>
    </li>
    <li>
        <NavLink to='/manageMyFoods'>Manage My Foods </NavLink>
    </li>
    <li>
        <NavLink to='/myFoodRequest'>My Food Request </NavLink>
    </li>
    <li>
        <NavLink to='/login'>Login</NavLink>
    </li>
    </>
  return (
    <div className="navbar ">
      <div className='navbar max-w-7xl mx-auto'>
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
              {
                  links
              }
          </ul>
        </div>
        <Link>
            <img src="https://i.ibb.co/58BJSWx/logo.png" className='w-56' alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {
                  links
              }
        </ul>
      </div>
      <div className="navbar-end">

          {
              user ? (<button className='btn' onClick={handleLogout}> Logout </button>  ) 
              :
                    (  <Link to='/login'><button className='btn'> Login</button> </Link>)
          }
      </div>
      </div>
    </div>
  );
};

export default Navbar;
