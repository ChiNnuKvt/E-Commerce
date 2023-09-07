import React from 'react'
import './ShopCard.css'
import { Link } from 'react-router-dom'
import Rating from './Rating'

import {
 
  useParams
} from "react-router-dom"; 


const ShopCard = ({ iteam }) => {
  return (
    <div className="card shadow ">
      <div className='border rounded border-5 border-white'>

        <div className='imgbox'>
          <Link to={'SingleProduct/'+iteam.id}>
            <img src={iteam.image} className="card-img-top" alt="..." />
          </Link>
        </div> 

        <div className="card-body">
          <h5 className="card-title">{iteam.name}</h5>{iteam.color}
          <Rating value={iteam.rating} text={`${iteam.numReviews} ratings`} />
          <strong>{`${iteam.price} Rs`}</strong>
        </div>

      </div>
    </div>

  )
}

export default ShopCard