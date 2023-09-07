import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className='contactInfo container'>
            <div className='box-info'>
                <div className='info-image'>
                    <i className='fas fa-phone-alt'>Phone</i>
                </div>
                <h5>Call us 24x7</h5>
                <p>0736 230 063</p>
            </div>
            <div className='box-info'>
                <div className='info-image'>
                    <i className='fas fa-fax'>Fax</i>
                </div>
                <h5>Fax</h5>
                <p>0736 230 063</p>
            </div>
            <div className='box-info'>
                <div className='info-image'>
                    <i className='fas fa-fax'>Fax</i>
                </div>
                <h5>Fax</h5>
                <p>0736 230 063</p>
            </div>


        </div>
    )
}

export default ContactInfo