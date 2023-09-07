import React,{useState, useEffect } from 'react'
import axios from 'axios'
const Test1 = () => {
    const [data,setData]=useState([]);
    useEffect(()=>
    {
        axios.get('').then(
            response=>setData(response.data))
    },[])

  return (
    <div>Test1<ol>
        {data.slice(0,12).map(item=>
        <li key={item.id}>{item.title}</li>
          )}</ol> 
    </div>
  )
}

export default Test1