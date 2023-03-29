import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex flex-row flex-wrap text-lg overflow-x-auto mb-5 justify-center  mx-[400px] '>
        {pageNumbers.map(number => (
          <li key={number} className='text-xl'>
            <a onClick={() => paginate(number)}  className='m-2 hover:text-fuchsia-500 focus:bg-slate-300 rounded-full'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;