import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets';

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [setFilter,setShowFilter] = useState(true);






  return (
    <div className='flex flex-cols sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/*Filter Option */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img className={`h-3 sm:hidden ${setShowFilter ?'rotate-90' : '' }`} src={assets.dropdown_icon} />

         {/*Category Filter */}
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${setShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} /> Men
              </p>
              <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} /> Women
              </p>
              <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} /> Kids
              </p>

          </div>

         </div>


             {/*Sub-Category Filter */}
             <div className={`border border-gray-300 pl-5 py-3 my-5 ${setShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} /> Topwear
              </p>
              <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} /> Bottomwear
              </p>
              <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} /> Winterwear
              </p>

          </div>

         </div>


      </div>

      
    </div>
  )
}

export default Collection
