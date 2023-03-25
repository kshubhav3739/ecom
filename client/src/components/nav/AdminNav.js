import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <React.Fragment>
            <nav class="nav flex-column">
                <Link to="/admin/dashboard" class="nav-link">Dashboard</Link>
                <Link to="/admin/product" class="nav-link">Product</Link>
                <Link to="/admin/products" class="nav-link">Products</Link>
                <Link to="/admin/category" class="nav-link">Category</Link>
                <Link to="/admin/sub" class="nav-link">Sub Category</Link>
                <Link to="/admin/coupan" class="nav-link">Coupans</Link>
                <Link to="/user/password" class="nav-link">Password</Link>
            </nav>
        </React.Fragment>
    )
}

export default AdminNav