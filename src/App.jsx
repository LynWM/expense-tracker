import React from 'react'
import AddExpense from './components/add-expense'
import Header from './components/header'
import ExpenseList from './components/expense-list'

export default function App() {
  return (
    <div>
      < Header />

      <div className='flex flex-row'>
        < AddExpense />
        < ExpenseList />
      </div>
      
    </div>
  )
}
