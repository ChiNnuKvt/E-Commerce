import React from 'react'
import './CalltoActionSection.css'

const CalltoActionSection = () => {
  return (
     <div className="subscribe-section bg-primary bg-with-black">
       <div className="container">
         <div className="row">
           <div className="col-xs-12 d-flex justify-content-center">
             <div className="subscribe-head ">
               <h2>DO you need more tips?</h2>
               <p>Sign up free and get the latest tips.</p>
               <form className="form-section">
                 <input placeholder="Your Email..." name="email" type="email" />
                 <input value= "Yes. I want!" name="subscribe" type="submit" />
               </form>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
};

export default CalltoActionSection
