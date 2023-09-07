import React from 'react'
import ShopingComponent from '../HomeComponents/ShopingComponent'
import CalltoActionSection from '../HomeComponents/CalltoActionSection';
import ContactInfo from '../HomeComponents/ContactInfo';
import MyPagination from '../HomeComponents/MyPagination';
import Header from '../Header/Header';



const HomePage=()=> {
  window.scrollTo(0,0);
  return (
    <div>HomePage
      <ShopingComponent/>
      <MyPagination/>
      <CalltoActionSection/>
      <ContactInfo/>
    </div>
  )
}

export default HomePage;




