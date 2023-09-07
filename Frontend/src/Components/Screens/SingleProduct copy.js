import React from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'

import products from '../../data/Products'
import Rating from '../HomeComponents/Rating'
import './SingleProduct.css'

const SingleProduct = () => {
  const {id}=useParams();
  const product =products.find((p)=>p.id===id)
  // const productId=match.params.id;
  // const product=products.find((p)=>p._id===productId);
  // const product=products.find((p)=>p._id===match.params.id);

//   const product = {
//     "id": "11",
//     "name": "Cotton Classic Sneakers",
//     "color":"Midnight Blue",
//     "categoryType":["COTTON","CLASSIC","SNEAKERS"],
//     "image": "./Assest/shoes/ND-CottonClassics-BeigeBG-MidnightBlue_WebOptimized_a_1000x11.jpg",
//     "description":"Evergreen style, paired with new age colors = Anywhere, Anytime usage. Classics guarantee comfort, style, versatility and sustainable fashion.Ideal for: Men and Women",
//     "price": 1499,
//     "countInStock": 3,
//     "rating": 4,
//     "numReviews": 3
// }
  return (
    <>
    

    
      <h1>Rohith Madipelly</h1>
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