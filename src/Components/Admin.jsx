import React from 'react'
 import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import bizpic from '../Image/bizpic.png'

const Admin = () => {
  let URI = `https://level3backendserver.onrender.com/user/products`
  const [allProduct, setallProduct] = useState([])
  const convertImage = (e)=>{
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload =()=>{
      let result = reader.result
      formik.setFieldValue('image', result)

    }
  }
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      category: "", // Initialize category to an empty string
      description: "",
      image: ""
    },
    onSubmit: (values) => {

      console.log(values.image);
      setallProduct([values, ...allProduct])

      axios.post(URI, values)
    },
  });

  return (
    <>
      <section className='mt-3 container'>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
            <h1 className='fw-bolder mb-5' style={{ color: "#07324a" }}>New Product Item</h1>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bolder">Product Name :</label>
                <input type="text" className="form-control" onChange={formik.handleChange} name='productName'/>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bolder">Price(#) 💰 :</label>
                <input type="number" className="form-control" onChange={formik.handleChange} name='price'/>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bolder">Description📑 : </label>
                <input type="text" className="form-control" onChange={formik.handleChange} name='description'/>
              </div>

              <div className='d-flex mb-3 mt-2'>
                <label className="form-label fw-bolder me-4">Categories: </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="category"
                >
                  <option>Select category</option>
                  <option value='Furniture'>Furniture</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Toys & Games">Toys & Games</option>
                  <option value="Baby Products">Baby Products</option>
                  <option value="Health & Beauty">Health & Beauty</option>
                  <option value="Sporting Goods">Sporting Goods</option>
                  <option value="Pet Supplies">Pet Supplies</option>
                  <option value="Home & Office">Home & Office</option>
                  <option value="Automobile">Automobile</option>
                  <option value="Book, Music & Movies">Book, Music & Movies</option>
                  <option value="Garden & Outdoors">Garden & Outdoors</option>
                  <option value="Other Category">Other Category</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bolder">Choose Image : </label>
                <input type="file" className="form-control" onChange={convertImage} name='image'/>
              </div>

              <button className='btn btn-success mt-2 px-4 fs-6 fw-bold w-100' type='submit'>Add Item</button>

            </form>
          </div>

          <div className='col-lg-7 col-sm-12'>
            <div className='overflow-y-scroll' style={{height: '100vh'}}>
            <img src={bizpic} className='w-100' alt="" />
            <div>
            <table className='table table-stripped '>
              <thead>
                <tr className='table-primary'>
                  <th>S/N</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>image</th>
                  <th>Action</th>
                </tr>
              </thead>


              {
                allProduct.map((items, index) => (
                  <tbody>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{items.productName}</td>
                      <td>{items.price}</td>
                      <td>{items.category}</td>
                      <td>{items.description}</td>
                      <td><img src={items.image} width={80} alt="" /></td>
                      <td className=''>
                        <button className='btn btn-danger w-100'>Delete</button>
                        <button className='btn btn-warning w-100 mt-2'>Edit</button>
                      </td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admin
