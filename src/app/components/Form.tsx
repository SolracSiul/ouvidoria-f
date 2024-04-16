"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  textArea: string;
  acceptTerms: boolean;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    textArea: '',
    acceptTerms: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement> | any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='h-[1250px] md:h-[1140px] mt-8 mb-6'>
      <div className=''>
        <div className="h-[352px] z-10 relative bg-cover bg-center md:bg-top" style={{ backgroundImage: "url('/images/background.jpg')", backgroundPosition: "center" }}>
          <div className='absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 '>
            <div className='h-[85px] w-[90vw] bg-[#f4f4f4] md:max-w-[1400px] rounded-md ' >
              <h1 className='text-[44px] text-[#01347c] font-semibold pl-4 pt-2'>Ombudsman</h1>
            </div>
            <form action="" className='flex flex-col absolute'>
              <h1 className='py-4'>
                The Unifacisa Ombudsman is a communication channel of a mediating and democratic nature, which welcomes the manifestations of students, teachers, employees, and the community in general. If you have any complaints, reports, suggestions, requests, or compliments, please contact us through our email: ouvidoria@unifacisa.edu.br or if you prefer, fill out our form by clicking on the link below.
              </h1>
              <div className='flex flex-col gap-4'>
                <div>
                  <label htmlFor="field1" className="block font-medium">Full Name:</label>
                  <input
                    type="text"
                    name="field1"
                    value={formData.field1}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="field2" className="block font-medium">Occupation</label>
                  <input
                    type="text"
                    name="field2"
                    value={formData.field2}
                    onChange={handleChange}
                    placeholder="Enter your occupation"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="field3" className="block font-medium">Phone</label>
                  <input
                    type="text"
                    name="field3"
                    value={formData.field3}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="field4" className="block font-medium">Email</label>
                  <input
                    type="text"
                    name="field4"
                    value={formData.field4}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="field5" className="block font-medium">Type</label>
                  <input
                    type="text"
                    name="field5"
                    value={formData.field5}
                    onChange={handleChange}
                    placeholder="Enter type"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="field6" className="block font-medium">Character</label>
                  <textarea
                    name="textArea"
                    value={formData.textArea}
                    onChange={handleChange}
                    placeholder="Enter text"
                    className="w-full border border-gray-300 p-2 rounded mt-2"
                    rows={4}
                  />
                </div>
                <div>
                  <label htmlFor="field5" className="block font-medium">Subject</label>
                  <input
                    type="text"
                    name="field5"
                    value={formData.field5}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="rounded border-gray-300"
                />
                <label htmlFor="acceptTerms">Accept Terms</label>
              </div>
              <div className='flex w-full justify-end'>
                <button
                  type="submit"
                  className="w-[240px] bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
