import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-col mx-3 my-4 gap-4'>
      <h1 className='font-barlow font-bold text-4xl '>
        Expense Tracker
      </h1>

      <p className='font-sans'>
        Take control of your expenses today using the Expense Tracker.
      </p>

    </div>
  )
}
