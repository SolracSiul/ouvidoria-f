import React from 'react'

interface ListProps{
    title: String;
    names: String[];
}
function List({title, names}: ListProps) {
  return (
        <div>
            <h1 className='font-semibold text-[22px]'>{title}</h1>
            <div className='flex flex-col gap-[2px] mt-10'>
                {names.map((name, index) => (
                    <h1 key={index} className='text-gray-800'>{name}</h1>
                ))}
            </div>
    </div>
  )
}

export default List