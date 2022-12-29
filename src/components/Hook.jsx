import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

function Hook() {
  const categoryValidationSchema = Yup.object({
    name: Yup.string().required("Name alanı boş geçilemez"),
    price:Yup.string().required('Price alani bos gecilmez'),
    stock: Yup.string().required("Stock alanı boş geçilemez!"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const add = (values) => {
    console.log(values);
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
  };

  console.log(watch("example"));
  return (
    <>
      <form onSubmit={handleSubmit(add)}>
        <div>
          <label>Name</label>

          <input name="name" type={"text"} {...register("name")} />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type={"number"} {...register("name")} />
        </div>
        <div>
          <label>Stock</label>
          <input name="stock" type={"number"} {...register("name")} />
        </div>

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Hook;
