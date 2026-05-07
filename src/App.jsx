import React, { useEffect, useState } from 'react'
import AddExpense from './components/add-expense'
import Header from './components/header'
import ExpenseList from './components/expense-list'

export default function App() {

  // STATES

  //for storing and fetching our expenses
  const [expenses, setExpenses] = useState( () => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  //for our filter search
  const [searchItem, setSearchItem] = useState("");

  //saving to local storage
  useEffect( () => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  //filter search
  const filterExpenses = expenses.filter((expense) =>
  expense.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  console.log(expenses);
  

  return (
    <div>
      < Header />

      <div className='flex flex-row'>
        < AddExpense 
            expenses = {expenses}
            setExpenses = {setExpenses}
        />
        < ExpenseList 
            expenses = {filterExpenses}
            searchItem = {searchItem}
            setSearchItem = {setSearchItem}
        />
      </div>
      
    </div>
  );
}
