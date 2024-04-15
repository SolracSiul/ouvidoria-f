import React from 'react'

interface Props{
    title: string;
    color: string;
    textColor: string;
    width: number;
}

function Button({title,color, textColor,width}: Props) {
  return (
    <button
    style={{ width: `${width}px` }}
    className={`bg-${color} text-${textColor} px-4 py-2 rounded-lg font-bold `}
    >
      {title}
    </button>
  )
}

export default Button