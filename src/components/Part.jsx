import React from 'react'

const Part = ({part,key,setSearchTerm}) => {
  return (
    <div className='px-1 hover:bg-slate-200 rounded-md text-lg font-bold hover:text-yellow-600' onClick={()=>setSearchTerm(part)}>
        {part}
    </div>
  )
}

export default Part