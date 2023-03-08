import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';
import Expenses from './component/expenses/Expenses';
import Newexpense from './component/new_expense/new_expense';

const DUMMY_DATA = [
  {id: 'e1',title: 'Groceries',amount: 94.12,date: new Date(2021, 7, 14),},
  {id: 'e2', title: 'New Mobile',amount: 799.49, date: new Date(2020, 2, 12),},
  {id: 'e3',title: 'Car Repair',amount: 294.67,date: new Date(2021, 2, 28)},
  {id: 'e4',title: 'New work desk',amount: 450,date: new Date(2021, 5, 12),}
];


  


const App = () =>  {
  const [expenses,setExpenses] = useState(DUMMY_DATA)
  const [isLoading,setLoading] = useState(true)
  useEffect(() =>{
    // fetch('http://localhost:8080/expenses')
    // .then(response => response.JSON())
    // .then(json => { console.log(json);
    //             setExpenses(json);
    //             setLoading(false);
    // })
  },[]);
  const onAddExpense = (newValue) => {
    console.log(newValue)
    let expense = {}
    expense.title = newValue.title
    expense.amount = newValue.amount
    expense.date = newValue.date
    console.log(expense)
    fetch('http://localhost:8080/add_expense',
    {
      method : "POST",
      body : JSON.stringify(expense)
    })
    setExpenses((prev) => {
      return [newValue,...prev];
    });

    
    console.log(newValue)
  }
  
  
  return (
    //<Counter />
    <div className="App">
      <h2>WELCOME TO EXPENSES TRACKER</h2>
      <Newexpense onAddExpense = {onAddExpense}/>
      <Expenses expenses = {expenses} isListLoading={isLoading}/>
    </div>
  );
}
export default App;