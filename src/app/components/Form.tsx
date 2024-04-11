import React from 'react'

function Form() {
  return (
    <div className='bg-red-300 h-[600px]'>
      <div className="h-[352px] relative bg-cover bg-center md:bg-top" style={{ backgroundImage: "url('/images/background.jpg')", backgroundPosition: "center" }}>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
        <div className='h-[45px] w-[80vw] bg-[#f4f4f4]' >
          <h1 className='text-[44px] text-[#01347c] font-semibold pl-4'>Ouvidoria</h1>

        </div>
        <form action="" className='flex flex-col absolute'>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
          <label htmlFor="">300 label</label>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Form