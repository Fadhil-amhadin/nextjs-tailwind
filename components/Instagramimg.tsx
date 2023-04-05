import Image, { StaticImageData } from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import React from 'react'

const Instagramimg:React.FC<{socialImg:StaticImageData}> = ({socialImg}) => {
    return (
        <div className='relative'>
            <Image src={socialImg} alt='/' className='w-full h-full'   style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
                <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30} /></p>
            </div>
        </div>
    )
}

export default Instagramimg