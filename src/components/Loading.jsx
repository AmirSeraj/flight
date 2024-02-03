import React from 'react'

const Loading = () => {
  return (
    <div className='w-full flex flex-col gap-2 p-3 animate-pulse'>
        <div className='w-[90%] p-4 rounded-full bg-slate-200'></div>
        <div className='w-[70%] p-3 rounded-full bg-slate-200'></div>
        <div className='w-[50%] p-2 rounded-full bg-slate-200'></div>
    </div>
  )
}

export default Loading