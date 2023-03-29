import React, { useState } from 'react'

const Exercises = () => {
    
  return (
    <div className='items-center justify-center flex'>
        <p className='text-red-500 text-lg'>Awesome ex<br/> you should know</p>
        <input value='' onChange placeholder='search for exercise' type='text'></input>
    </div>
  )
}

export default Exercises