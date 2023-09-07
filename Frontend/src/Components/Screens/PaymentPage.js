import React from 'react'
import {Link} from 'react-router-dom';


const PaymentPage = () => {
  window.scrollTo(0,0);
  const sumbitHandler=(e)=>
  {
    e.preventDefault();
  }
  return (
    <div className='container d-flex justify-content-center align-items-center login-'>
      <form className='Login2 col-md-8 col-lg-4 col-11' onSubmit={sumbitHandler}>

          <h6> Select Payment Method</h6>
          <div className='payment-container'>
            <div className="radio-container">
              <input type="radio" className="form-check-input" value='PayPal'/>
              <label htmlFor="" className="form-check-label">PayPal or Credit Card</label>

            </div>
          </div>

          <button type='sumbit'> <Link to='/placeoder'>Continue</Link></button>
      </form>
    </div>
  )
}

export default PaymentPage