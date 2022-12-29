import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

function Formik() {
    const categoryValidationSchema = Yup.object({
        name: Yup.string().required('Name alanı boş geçilemez'),
        price: Yup.string().required('Description alanı boş geçilemez!')
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            stock:'',
            price:''
        },
        validationSchema: categoryValidationSchema,
        onSubmit: values => {
            fetch("https://northwind.vercel.app/api/products", {
 
    method: "POST",

    body: JSON.stringify({
       values
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
   
    .then((response) => response.json())

 
    .then((data) => console.log(data));
        }
    })
  return (
    <>
            <form
            onSubmit={formik.handleSubmit}
        >
            {
                formik.errors.name ? <span style={{color:'tomato'}}>{formik.errors.name}</span> : <></>
            }
            <div>
                <label>Category Name:</label>
                <input
                    type='text'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type='text'
                    name='price'
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type='text'
                    name='stock'
                    onChange={formik.handleChange}
                    value={formik.values.stock}
                />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>

        </form>
    
    </>
  )
}

export default Formik