import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }))

  const logout = () => {
    auth.signOut();
    dispatch({
      type: "LOGOUT",
      payload: null
    })
    navigate("/login")
  }

  return (
    <React.Fragment>


<style>



</style>





      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container-fluid">
          {user && (
            <Link className="navbar-brand ms-2 p-2 me-4" to="/">  {user.email && user.email.split("@")[0] } </Link>
          )}
          {!user &&(
             <Link className="navbar-brand ms-2 p-2 me-4" to="/">  Navdbar </Link>
          )}
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {!user &&(
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
              )}

{!user && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
              </li>
            )}


            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">search</button>
            </form>
       {user && user.role === "subscriber" && ( <Link to="/user/history">User Dashboard</Link>)}     
       {user && user.role === "admin" && ( <Link to="/admin/dashboard">Admin Dashboard</Link>)}     


            {user && (
              <button class="btn get_strBtn text-white me-5 mt-2 px-3 py-2 ms-1 rounded-pill" onClick={logout}> Logout</button>
            )}
          </div>
        </div>
      </nav>


{/* 
      <nav class="navbar navbar-expand-lg bg-light shadow">
        <div class="container-fluid">
            <a class="navbar-brand ms-2 p-2 me-4" href="#">MULTITASKING</a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                    <li class="nav-item">
                        <a class="nav-link ul_navItems" aria-current="page" href="#"> Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Collection</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <button class="btn get_strBtn text-white me-5 mt-2 px-3 py-2 ms-1 rounded-pill">Get
                        Started</button>
                </form>
            </div>
        </div>
    </nav> */}



    </React.Fragment>
  )
}

export default Header