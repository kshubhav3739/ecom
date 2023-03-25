import React, { useEffect, useState } from 'react'
import Jumbotron from '../components/card/Jumbotron';
import ProductCard from '../components/card/ProductCard';
import BestSellers from '../components/home/BestSellers';
import NewArrivels from '../components/home/NewArrivels';
import { getlistProducts } from '../functions/product';

const Home = () => {

  return (
    <React.Fragment>
      <h2 class="h2 text-center">
        <Jumbotron text={["Newest Arrivles", "Best Sellers", "Retails Sellers"]} />
      </h2>

      <h2 class="h2 text-center">Newest Arrivels</h2>
      <NewArrivels/>  

      <h2 class="h2 text-center">Best Sellers</h2>
      <BestSellers/>


    </React.Fragment>
  )
}

export default Home