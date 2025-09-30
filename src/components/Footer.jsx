import React from 'react'

const Footer = () => {
  return (
    <div className=' py-10 flex justify-center flex-col items-center gap-6'>
      <div className="logo">
        <img src="/sign.png" alt="" className='w-36' />
      </div>

      {/* menu */}

      <div className="flex gap-4">
        {
            ["Home", "About","Works", "Contact",].map((e)=>(
                <a href={e.toLowerCase() == "home" ?"/":e.toLowerCase() } key={e} className='capitalize  text-sm text-white/50 hover:text-primary cursor-pointer'>{e}</a>
            ))
        }
      </div>

<div className="">
      <p className='text-white/40'>© All rights reserved by <span className='text-gray-400'>sadhasivam</span></p>
</div>

    </div>
  )
}

export default Footer
