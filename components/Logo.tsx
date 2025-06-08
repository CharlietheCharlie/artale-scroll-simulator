import Image from 'next/image'
import React from 'react'

const Logo = (): React.ReactElement => {
  return (
    <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={200}
          height={100}
          className="mx-auto object-cover w-40 h-30" 
        />
    </div>
  )
}

export default Logo