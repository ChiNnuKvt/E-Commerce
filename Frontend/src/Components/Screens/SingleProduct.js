import React from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'

import Allproducts from '../HomeComponents/Data/Pro2.json'
import Rating from '../HomeComponents/Rating'
import './SingleProduct.css'

const SingleProduct = () => {
  const {id}=useParams();
  const product =Allproducts.find((p)=>p.id===id)
  console.log(product)

if (!product) {
  return <div>Product not found
    <NotFoundPage/>
  </div>;
}
  return (
    <>
      <div className='container single-product'>
        <div className='row mt-5'>
          <div className='col-md-6'>
              <div className='singleimage'>
                <img src={product.image} alt={product.name} className='w-100'/>
              </div>
          </div>
          <div className='col-md-6'>
            <div className='product-dtl'>
              <div className='product-info'>
                <div className='product-name'><h1>{product.name}</h1>
                <h3>{product.price}.Rs</h3></div>
                <p>{product.countInStock} left</p>
              </div>
              <p>{product.description}</p>
              <p>{product.categoryType}</p>
              <p>{product.color}</p>
              <p><Rating value={product.rating} text={product.numReviews}></Rating> Reviews</p>
              <button className='btn btn-success'>Buy Now</button>
              <button className='btn btn-primary mx-3'>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct