import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteCom = () => {


    useEffect(()=>{
        deleteProduct()
    },[])


    const Navigate=useNavigate()


    const {id}=useParams()


    const deleteProduct=async ()=>{
        try {
            const response=await axios.delete(`/delete/${id}`)
            if (response.data.success) {
                Navigate("/allproductsrecord")
            }
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default DeleteCom
