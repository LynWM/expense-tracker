import React from 'react'

export default function AddExpense() {

    // states and functions

  return (
    <div className=' border-3 rounded flex flex-col py-4 px-3 m-3 w-1/4'>

        {/* div for h2 and p */}
        <div className='flex flex-col gap-1 py-2' >
            <h3 className='font-barlow font-bold text-xl '>
                Add Expense
            </h3>
            <p  className='font-sans'>
                Enter your expense details below
            </p>
        </div>

        {/* form */}
        <form className=''>
            {/* div for inputs */}
            <div className='flex flex-col gap-3'>
                <input className='border-2 rounded p-1 '
                    type="text" 
                    placeholder='Enter Expense Name'
                />

                <input className='border-2 rounded p-1 '
                    type="text" 
                    placeholder='Enter Expense Description'
                />

                <input className='border-2 rounded p-1 ' 
                    type="text" 
                    placeholder='Enter Expense Category'
                />

                <input className='border-2 rounded p-1 ' 
                    type='number' 
                    placeholder='Enter Amount'
                />

                <input className='border-2 rounded p-1 '
                    type="Date" 
                />
            </div>

            <button className=' mt-4 rounded-xl bg-gray-400 p-2 flex'>
                Save Expense
            </button>

        </form>

    </div>
  )
}

// PENDINGS
// TAILWIND CSS PERFECTING
// HOOKS
// FUNCTION FOR SAVING EXPENSE
// LOCAL STORAGE