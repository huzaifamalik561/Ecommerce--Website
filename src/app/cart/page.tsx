'use client'
import React, { useState } from 'react';

const Cart= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do something with the form data (e.g., send it to a server)
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-6">Landing Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md p-2" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md p-2" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="w-full border-gray-300 rounded-md p-2" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">Address:</label>
            <textarea id="address" name="address" rows={4} className="w-full border-gray-300 rounded-md p-2" value={formData.address} ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;




