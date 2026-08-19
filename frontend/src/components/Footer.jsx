import React from 'react'
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid gap-14 my-10 mt-40 text-sm grid-cols-[3fr_1fr_1fr]">

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                The biggest online retailer in the country. We hope you like our offerings. Thanks :)
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 7087775674</li>
                <li>contact@Choices</li>
            </ul>
        </div>
      </div>

    <div>
        <hr />
        <p className='pt-5 text-sm text-center'>Copyright 2026@ Choices.com - All Rights Reserved</p>
        <p className='pt-2 pb-5 text-sm text-center'>Created with ❤️ by Gurvansh </p>
    </div>


    </div>
  )
}

export default Footer
