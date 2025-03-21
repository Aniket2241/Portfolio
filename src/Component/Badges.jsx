import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Badges() {
  return (
    <div>
 <div className='flex items-center gap-2 mt-10'>
        <h1 className='text-gray-300 text-4xl font-serif font-bold ml-23'>Badges</h1>
        <RiVerifiedBadgeFill className='text-blue-400 text-3xl'/></div>
      <div className='flex ml-23 mt-5 gap-10 '>
 <a href="https://www.credly.com/badges/bb640f6f-dd05-47ff-b672-7d388dc9957d/public_url " target='_blank'><img src="/badge1.png" alt="Cloud Security Foundations" title='See Credential' className='cursor-pointer hover:transform hover:scale-105   rounded-lg border-2 border-blue-400 bg-gray-700   w-[10vw]' /></a>
 <a href="https://www.credly.com/badges/04e1c174-533f-4d98-9474-558fac763e5f/public_url " target='_blank'><img src="/badge2.png" alt="Cloud Foundations"  title='See Credential' className=' cursor-pointer  hover:transform hover:scale-105   border-blue-400 border-2 rounded-2xl bg-gray-700 w-[10vw]' /></a></div>
    </div>
  )
}
