import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Allrecords = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        getAllRecords()

    }, [])

    const getAllRecords = async () => {
        try {
            const response = await axios.get("/allrecordproducts")
            console.log(response.data.result);

            if (response.data.success) {
                setData(response.data.result)
            }

        } catch (error) {

        }

    }
    // const handleDelete =async (id)=>{
    // const respose=await axios.delete("/allrecordproducts")
    // }


    return (
        <>
        <h1 className='text-center'>All Product List</h1>


            <table class="table text-center w-50 offset-3 mt-3">
                <thead class="table-success ">
                    <tr>
                        <th scope="col">SrNo</th>
                        <th scope="col">Stock Name</th>
                        <th scope="col">Stock Number</th>
                        <th scope="col">Stock Category</th>
                        <th scope="col">Stock Price</th>
                        <th scope="col">Total Stock</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, index, arr) => {
                            console.log(val);
                            return (
                                <>
                                        <tr class="table-success ">
                                        <td> {index + 1 }</td>                    
                                            <td>{val.name}</td>
                                            <td>{val.number}</td>
                                            <td>{val.category}</td>
                                            <td>{val.price}</td>
                                            <td>{val.total}</td>

                                            <td>
                                            <Link to={`/edit/${val._id}`} className="btn btn-outline-primary">Edit</Link>
                                            <Link to={`/delete/${val._id}`} className="btn btn-outline-primary" >Delete</Link>
                                            </td>
                                            
                                        </tr>

                                </>
                            )


                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Allrecords
