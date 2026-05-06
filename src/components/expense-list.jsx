import React from 'react'
import FilterSearch from './filter-search'

export default function ExpenseList() {
  return (
    <div className='w-3/4 flex flex-col gap-3 m-2'>
      <h3 className='font-barlow font-bold'>
        My Expenses
      </h3>

      < FilterSearch />

      <table className='border-2'>
        <tr className=''>
            <th className='border-2'>Name</th>
            <th className='border-2'>Description</th>
            <th className='border-2'>Category</th>
            <th className='border-2'>Amount</th>

        </tr>
        <tr>
            {/* dynamically update after saving at the form */}
            <td className='border-2'>Potatoes</td>
            <td className='border-2'>For Sunday's Mukimo</td>
            <td className='border-2'>Groceries</td>
            <td className='border-2'>250</td>
        </tr>
            
        <tr>
            {/* dynamically update after saving at the form */}
            <td className='border-2'>Potatoes</td>
            <td className='border-2'>For Sunday's Mukimo</td>
            <td className='border-2'>Groceries</td>
            <td className='border-2'>250</td>
        </tr>

      </table>
    </div>
  )
}

//Pendings
// dynamic update to the expenses (from save button in add expense)
// fetching from local server
//alternating stylings for the table
// optimization of the table