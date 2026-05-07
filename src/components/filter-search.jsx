import React from 'react'

export default function FilterSearch({
  searchItem,
  setSearchItem,
}) {


  return (
    <div>
      <input className='border-2 rounded-md w-1/2 p-1 bg-gray-300 '
        type="search"
        placeholder='Search for Expenses...'
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}
        />
    </div>
  )
}
