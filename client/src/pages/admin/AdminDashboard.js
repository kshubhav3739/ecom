import React from 'react'
import AdminNav from '../../components/nav/AdminNav'


const AdminDashboard = () => {

  return (
    <React.Fragment>
    
      <div class="container">
        <div class="row">
          <div class="col-2"><AdminNav /></div>
          <div class="col">
          <h3> Admin Dashboard   </h3>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default AdminDashboard