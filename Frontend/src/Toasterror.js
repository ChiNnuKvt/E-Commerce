import React from 'react'
import {toast} from 'react-toastify';               // Importing toastify module
import 'react-toastify/dist/ReactToastify.css';     // Import toastify css file
toast.configure();                                  // toast-configuration method,  // it is compulsory method


const Toasterror = () => {
    const notificationBar=()=>
    {
        toast("rohith error vachindhi chudhuu")
    }
  return (
    <div>
        <button onClick={notificationBar}>click Me to Diplay error</button>
    </div>
  )
}

export default Toasterror