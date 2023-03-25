import React from 'react'
import { Link } from 'react-router-dom';

const AdminProductCard=({products,handleRemove})=> {

  const {title,description,images,slug}=products;

  return (
    <React.Fragment>

<div class="card" style={{width: "12rem",height:"18rem"}}>
  <img src={images && images.length ? images[0].url:"https://cdn.bookauthority.org/dist/images/book-cover-not-available.6b5a104fa66be4eec4fd16aebd34fe04.png" } class="card-img-top" alt="..." style={{height:200}}/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description.substring(0,20)}</p>
  </div>
  <div class="row">
    <div class="col">
    <Link to={`/admin/products/${slug}`} class="btn text-success">Edit</Link>
    </div>
    <div class="col">
    <button class="btn text-danger" onClick={()=>handleRemove(slug)}>Delete</button>
    </div>
  </div>
</div>

</React.Fragment>
  )
}

export default AdminProductCard;