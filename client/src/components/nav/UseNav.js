import React from 'react'
import { Link } from 'react-router-dom'

const UseNav = () => {
    return (
        <React.Fragment>
            <nav class="nav flex-column">
                <Link to="/user/history" class="nav-link">User History</Link>
                <Link to="/user/password" class="nav-link">User Password</Link>
                <Link to="/user/wishlist" class="nav-link">User Wishlist</Link>
            </nav>
        </React.Fragment>
    )
}

export default UseNav