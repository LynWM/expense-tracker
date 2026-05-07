import React, { useState } from 'react'
import ExpenseList from './expense-list';

export default function AddExpense({
    expenses,
    setExpenses
}) {

    // STATES
    const [formData, setFormData] = useState({
        name: '',
	    description: '',
		category: '',
		amount: '',
		date: '',
    })

    // Functions

    // for saving expenses
    function handleSubmit(event) {
        event.preventDefault();

        const newExpense = {
            id: Date.now(),
            name: formData.name,
            description: formData.description,
            category: formData.category,
            amount: formData.amount,
            date: formData.date
        };

        setExpenses([...expenses, newExpense]);

        //clearing form
        setFormData({
            name: '',
	        description: '',
		    category: '',
		    amount: '',
		    date: '', 
        })
    }


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
        <form onSubmit={handleSubmit}>

            {/* div for inputs */}
            <div className='flex flex-col gap-3'>

                <input className='border-2 rounded p-1 '
                    type="text" 
                    placeholder='Enter Expense Name'
                    value={formData.name}
                    onChange={(event) => 
                        setFormData({
                            ...formData,
                            name: event.target.value,
                        })
                    }
                />

                <input className='border-2 rounded p-1 '
                    type="text" 
                    placeholder='Enter Expense Description'
                    value={formData.description}
                    onChange={(event) => 
                        setFormData({
                            ...formData,
                            description: event.target.value,
                        })
                    }
                />

                <input className='border-2 rounded p-1 ' 
                    type="text" 
                    placeholder='Enter Expense Category'
                    value={formData.category}
                    onChange={(event) => 
                        setFormData({
                            ...formData,
                            category: event.target.value,
                        })
                    }
                />

                <input className='border-2 rounded p-1 ' 
                    type='number' 
                    placeholder='Enter Amount'
                    value={formData.amount}
                    onChange={(event) => 
                        setFormData({
                            ...formData,
                            amount: event.target.value,
                        })
                    }
                />

                <input className='border-2 rounded p-1 '
                    type="Date" 
                    value={formData.date}
                    onChange={(event) => 
                        setFormData({
                            ...formData,
                            date: event.target.value,
                        })
                    }
                />
            </div>

            <button
                type='submit' 
                className=' mt-4 rounded-xl text-white bg-gray-800 hover:bg-red-900 cursor-pointer p-2 flex'>
                Save Expense
            </button>

        </form>

    </div>
  )
}
