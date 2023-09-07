import React from 'react'

const ProfilePage = () => {
  return (
    <section className='container py-2'>
       <div className="row">
        {/* col first-left */}
        <div className="col col-3">
          <div className='card'>
          <div className="profileCard text-center">
            <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp' alt='profilePic' className='rounded-circle' style={{width:'150px'}} fluid/>
          <div className='data'>
              <p className="my-1">UserName</p>
              <p className="mb-4">UserEmail</p>      
          </div>
          </div>
        </div>
       </div>
       <div className="col col-9 card">
          <div className='m-4'>
          <div className="row ms-1">
              <div className="col-3">
                  <strong>Full Name</strong>
              </div>
              <div className="col-9">
                  Rohith Madipelly
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                   <strong>Email</strong>
              </div>
              <div className="col-9">
                  madipellyrohith@gmail.com
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                   <strong>Gender</strong>
              </div>
              <div className="col-9">
                  Male
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
                  <strong>Phone</strong>
              </div>
              <div className="col-9">
                  9951072005
              </div>
            </div>
            <hr/>
            
            <div className="row ms-1">
              <div className="col-3">
                  <strong>Address</strong>
              </div>
              <div className="col-9">
                  11-24-140,2nd Bank Colony, Shanthi Nagar,Warangal,Telangana,India.
              </div>
            </div>
            <hr/>
            <div className="row ms-1">
              <div className="col-3">
              <strong>OrderId</strong>
              </div>
              <div className="col-9">
                  OrderIDDe22DDDDD4956
              </div>
            </div>
            
          </div>
       </div>
       </div>

    </section>
    
  )
}

export default ProfilePage