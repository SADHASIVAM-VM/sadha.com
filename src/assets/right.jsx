import React from 'react'
import { useNavigate } from 'react-router-dom'
const Right = ({link}) => {
  console.log(link)
  const navigate = useNavigate()
  return (
    <div className="absolute bottom-3 right-6 rounded-full  border border-[#444444] p-1" onClick={()=> navigate(link)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" color='#7c7c7c' className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</div>
  )
}

export default Right
