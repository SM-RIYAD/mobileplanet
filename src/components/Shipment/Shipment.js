import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const [loggedIn,setLoggedIn] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
console.log("ekhon dekhi",loggedIn);
  return (
    
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
     

      <input {...register("name", { required: true })} defaultValue={loggedIn.displayName} placeholder="Your Name" />
      {errors.name && <span className='error'>Name is required</span>}

      <input {...register("email", { required: true })} defaultValue={loggedIn.email} placeholder="Your Email" />
      {errors.email && <span className='error'>Email is required</span>}

      <input {...register("address", { required: true })} placeholder="Your Address" />
      {errors.address && <span className='error'>Address is required</span>}

      <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
      {errors.phone && <span className='error'>Phone number is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;