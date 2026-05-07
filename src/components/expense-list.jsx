import React from 'react'
import FilterSearch from './filter-search'

export default function ExpenseList({
  expenses,
  searchItem,
  setSearchItem
}) {
  return (
    <div className='w-3/4 flex flex-col gap-3 m-2'>
      <h3 className='font-barlow font-bold text-lg'>
        My Expenses
      </h3>

      < FilterSearch 
          searchItem = {searchItem}
          setSearchItem = {setSearchItem}
      />

      <table className='border-2'>
        <thead>
          <tr className='bg-gray-800'>
            <th className='border-2-black text-gray-200'>Name</th>
            <th className='border-2-black text-gray-200'>Description</th>
            <th className='border-2-black text-gray-200'>Category</th>
            <th className='border-2-black text-gray-200'>Amount</th>
            <th className='border-2-black text-gray-200'>Date</th>
          </tr>
        </thead>
        
        <tbody>
          {expenses.map((expense) => (
            <tr key ={expense.id} className='odd:bg-white even:bg-gray-200'>
              <td className='border-2 p-2'>{expense.name}</td>
              <td className='border-2 p-2'>{expense.description}</td>
              <td className='border-2 p-2'>{expense.category}</td>
              <td className='border-2 p-2'>{expense.amount}</td>
              <td className='border-2 p-2'>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
