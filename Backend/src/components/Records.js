import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Records = () => {
  const [addData, setUserData] = useState({
    name: '',
    number: '',
    category: '',
    price: '',
    total: '',

  })

  const Navigate = useNavigate()

  const handleInputs = (e) => {
    setUserData({ ...addData, [e.target.name]: e.target.value })
  }

  const addRecord = async (e) => {

    e.preventDefault();
    const { name, number, category, price, total } = addData;
    const response = await axios.post("/Record", addData)
console.log(response);
    if (response.data.success) {
      Navigate("/allproductsrecord")
    }
  }
  

  return (
    <>

      <div className='row text-center'>
        <h1>Add Product Here</h1>
        <div className='col-sm-6 offset-3'>

          <form method="POST">
            <input type="text"
              placeholder="Enter The Stock Product name"
              className='form-control mt-2'
              name="name"
              value={addData.name}
              onChange={handleInputs}
            />

            <input type="ntext" name="number" id="stockNumber"
              value={addData.number}
              onChange={handleInputs}
              placeholder="Enter The Stock Id"
              className='form-control mt-2'


            />

            <input type="text" name="category" id="category"
              value={addData.category}
              onChange={handleInputs}
              placeholder="Enter The Stock Product Category"
              className='form-control mt-2'


            />

            <input type="text" name="price" id="price"
              value={addData.price}
              onChange={handleInputs}
              placeholder="Enter The Stock Product Price"
              className='form-control mt-2'


            />

            <input type="number"
              name="total"
              value={addData.total}
              onChange={handleInputs}
              placeholder="Enter The Stock Product Total"
              className='form-control mt-2'
            />

            <div className="text-center mt-2">
              <button type="Submit" className='btn btn-primary form-control' value='register' onClick={(e) => addRecord(e)}>Submit</button>
            </div>

          </form>


        </div>

      </div>

    </>


  )
}

export default Records
