import React, { useState, useEffect } from 'react'
import './ShopingComponent.css'
import ShopCard from './ShopCard'
import Pro2 from './Data/Pro2.json'
import axios from 'axios'

import { useDispatch , useSelector } from "react-redux";
import { listProduct} from "../../Redux/Actions/ProductActions";
import Loading from '../LoadingError/Loading'
import Message from '../LoadingError/Error'

const ShopingComponent = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])

    // const info,setInfo]=useState([]);
    // useEffect(()=>
    // {
    //     axios.get('http://127.0.0.1:8001/api/products').then(
    //         response=>setInfo(response.product))
    // },[])

    return (
        <div className='Newcontainer'>
            <span>Shoping Area Start Here.......</span>
            <div className='row justify-content-center'>
                {
                    // loading ? (<div className='mb-5'><Loading/></div>) : error ? (<Message variant="alert-danger">{error}</Message>) :
                    // loading ? (<div className='mb-5'><Loading/></div>):error?(<p>Error</p>):
                        // (
                            <>
                                {Pro2.map((data) =>
                                (
                                    <div className='g-3 col-xs-w-100 col-12 col-sm-6 col-md-4 col-lg-3'>
                                        <ShopCard key={data.id} iteam={data} />
                                        <Message variant={"alert-danger"}>Rohith</Message>
                                    </div>
                                ))}

                            </>
                        // )
                }

            </div>
        </div>
    )
}

export default ShopingComponent

