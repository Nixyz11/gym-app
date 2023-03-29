import React from 'react'

const Detail = ({detail}) => {
    const {bodyPart,equipment,target,name,gifUrl} = detail;
    console.log(detail)
  return (
    <div className='flex flex-row items-center justify-center'>
        <div>
        <img src={gifUrl} className=''/>
        </div>
        <div className='flex flex-col justify-center items-center text-center'>
        
        <p className='p-12 text-4xl font-extrabold '>{name}</p>
        <p>body part: <span className='font-bold text-lg'>{bodyPart}</span></p>
        <p>targeting: <span className='font-bold text-lg'>{target}</span></p>
        <p>targeting: <span className='font-bold text-lg'>{equipment}</span></p>
        </div>
    </div>
  )
}

export default Detail