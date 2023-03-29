import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ExCard from '../components/ExCard'
import Pagination from '../components/Pagination'

//pagination,fetchYT

const Exercise = ({ex}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  console.log(ex)
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ex.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <div className='flex flex-col justify-center items-center mb-2'>
      <p className='text-lg text-gray-600'>Showing results:</p>
      </div>
      <div className='flex flex-row justify-between flex-wrap w-full items-center '>
        {currentPosts?.map((exe,i)=>(
          <div className='w-1/3' key={i}>
            <Link to={`/exercise/${exe.id}`}>
            <ExCard exe={exe}/>
            </Link>
          </div>
        ))}
        
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={ex.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Exercise