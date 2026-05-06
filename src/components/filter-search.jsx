import React from 'react'

export default function FilterSearch() {


  return (
    <div>
      <input className='border-2 rounded-md w-1/2 p-1 bg-yellow-100'
        type="search"
        placeholder='Search for Expense...'
        />
    </div>
  )
}

//Pendings
// filtering search from the current expenses list(in real time and also after pressing enter/search)
// keydown/keypress onChange...either of the two, not certain