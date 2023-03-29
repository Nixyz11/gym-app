import React from 'react'

const ExerciseVideo = ({video,name}) => {
  //if(!video.length) return 'Loading...'
  return (
    <div>
      <div className='flex justify-center items-center mb-10'>
      <p>Watch <span className='text-2xl text-gray-700 font-bold leading-tight mb-2'>{name} </span>videos:</p>

      </div>


      
      <div className='grid grid-cols-3 gap-4'>
        {video?.slice(0,3).map((it,i)=>(
          <div className='  flex flex-col '>
          <a key={i} href={`https://www.youtube.com/watch?v=${it.video.videoId}`} target='_blank' rel='norefferer' >
            <div className=''>
            <img src={it.video.thumbnails[0].url} alt='title' className='mb-5 rounded-lg w-[400px] h-[130px] pl-[150px]'/>
            <div className='flex flex-col text-center text-slate-800'>
            <p className='capitalize text-slate-900'>{it.video.title.toLowerCase()}</p>
            <p>channel: {it.video.channelName}</p>
            </div>
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideo