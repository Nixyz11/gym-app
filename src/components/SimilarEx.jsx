import React from 'react'
import { Link } from 'react-router-dom'
import ExCard from './ExCard'

const SimilarEx = ({eq,tar}) => {
  return (
    <div>
      <div className='flex justify-center items-center'>
      <p className='text-lg font-bold text-red-500'>EX with similar target group</p>
      </div>
      <div className=''>
         <div className='flex flex-row overflow-x-auto border'>
        {tar?.map((exe,i)=>(
          <div className='' key={i}>
            <Link to={`/exercise/${exe.id}`}>
            <ExCard exe={exe}/>
            </Link>
          </div>
        ))}
        
      </div>
        </div>
        <div className='flex justify-center items-center'>
      <p className='text-lg font-bold text-red-500 mt-10'>EX with similar equipment</p>
      </div>
      <div className=''>
         <div className='flex flex-row overflow-x-auto border'>
        {eq?.map((exe,i)=>(
          <div className='' key={i}>
            <Link to={`/exercise/${exe.id}`}>
            <ExCard exe={exe}/>
            </Link>
          </div>
        ))}
        
      </div>
        </div>
    </div>
  )
}

export default SimilarEx