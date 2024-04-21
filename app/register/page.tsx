"use client"
import React from 'react';
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
 name: z.string().min(2,"name must be at least 2 caracters").max(50,"name must be 50 caracters max"),
 email: z.string().email(),
 phoneNumber: z.string().min(10,"phone number must be 10 caracters"),
 message: z.string().min(5,"message must be at least 5 caracters"),
});

const ProfileForm = () => {
 const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
 });

 const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
 };

 return (
    <form onSubmit={handleSubmit(onSubmit)} className='border w-1/2 shadow-md rounded-md mx-auto mt-12 py-16 px-10'>
     <div className='flex flex-col'>
      <label htmlFor="name">Name:</label>
      <input id="name" {...register("name")} className='border outline-none rounded-sm h-12' />
      {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

     </div>
     <div className='flex flex-col'>
      <label htmlFor="email">Email:</label>
         <input id="email" type="email" {...register("email")} className='border outline-none rounded-sm h-12'/>
         {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
     </div>

     <div className='flex flex-col'>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input id="phoneNumber" {...register("phoneNumber")} className='border outline-none rounded-sm h-12'/>
      {errors.phoneNumber && <p className='text-red-600'>{errors.phoneNumber.message}</p>}
     </div>

      <div className='flex flex-col'>
      <label htmlFor="message">Message:</label>
      <textarea id="message" {...register("message")}className='border outline-none rounded-sm h-12'/>
      {errors.message && <p className='text-red-600'>{errors.message.message}</p>}
      </div>

      <button type="submit" className='bg-black rounded-sm text-white p-3 mt-4'>Submit</button>
    </form>
 );
};

export default ProfileForm;
