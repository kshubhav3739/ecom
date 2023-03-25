import React, { useEffect, useState } from 'react'
import { getlistProduct } from '../../functions/product';
import Jumbotron from '../card/Jumbotron';
import ProductCard from '../card/ProductCard';

const BestSellers = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, [])


  const loadAllProducts = () => {
    setLoading(true);
    // sort, order, limit
    getlistProduct("sold", "desc", 3).then((res) => {
        setProduct(res.data);
      setLoading(false);
    });
  };

  return (
    <React.Fragment>
     { loading?"Loading...": <div className='container'>
        <div className='row border'>
          {product.map((products) => {
            return (
              <div className='col-3'>
                <ProductCard products={products} />
              </div>
            )
          })}
        </div>
      </div> }

    </React.Fragment>
  )
}

export default BestSellers