import React,{useState, useEffect } from 'react'
import axios from 'axios'

const Test12 = () => {
    const [data,setData]=useState([]);
    const API='http://localhost:8001/api/products';

  useEffect(()=>
  {
    getApiData('http://localhost:8001/api/products')
   
  },[])

  const getApiData=async (url)=>
  {
    const response=await axios.get(url);
    console.log(response.data);
    const res=response.data;
    setData(res);
    }
   

  return (
    <>Rohith 
    </>
    // <div>Test1<ol>
    //     {data.slice(0,12).map(item=>
    //     <li key={item.id}>{item.title}</li>
    //       )}</ol> 
    // </div>
  )
}

export default Test12