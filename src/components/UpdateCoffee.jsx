import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
   
    const coffee= useLoaderData();
    const { _id, name, quantity, supplier, taste, photo, category,details } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
  
        const name= event.target.name.value;
        const quantity= event.target.quantity.value;
        const supplier= event.target.supplier.value;
        const taste= event.target.taste.value;
        const category= event.target.category.value;
        const details= event.target.details.value;
        const photo= event.target.photo.value;
     
        const updatedCoffee= {name, quantity, supplier, taste, category, details, photo};
        console.log(updatedCoffee)
  
  
         // send data to the server
         fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedCoffee)
      })
          .then(res => res.json())
          .then(data => { 
               console.log(data)
               if(data.modifiedCount>0){
                  Swal.fire({
                      title: 'Success!',
                      text: 'Coffee Updated Successfully',
                      icon: 'success',
                      confirmButtonText: 'Cool'
                    })
              }
          })
  
     }

    return (
        <div className="p-24">
        <h2 className="text-3xl font-extrabold" >Update Coffee :  {name}</h2>
  
        <form onSubmit={handleUpdateCoffee} >
          {/* name & qunatity */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>
      
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Avaliable Quantity</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Avaliable Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
          </div>
          
       {/* supplier & test */}
  
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier Name"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>
      
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Taste </span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
          </div>
  
           {/* category & details */}
  
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>
      
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
          </div>
     
       {/* Photo Url */}
  
       <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo Url"
                  className="input input-bordered  w-full"
                />
              </label>
            </div>
  
            </div>
      
          <input type="submit" value="Update Coffee"  className="btn btn-block" />
  
        </form>
      </div>
    );
};

export default UpdateCoffee;