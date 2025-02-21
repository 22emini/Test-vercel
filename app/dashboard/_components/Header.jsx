"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image';
import React from 'react'
import MobileNav from './Test';

function Header() {
  const {user}=useKindeBrowserClient();
  return (
    <div className='p-4 shadow-sm border flex justify-between'>
        <div>
        <MobileNav />
        </div>
        <div>
       
          <Image src={user?.picture} 
          width={35} 
          height={35}
          alt='user'
          className='rounded-full'
          />
        </div>
    </div>
  )
}

export default Header