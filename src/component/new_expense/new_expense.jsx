import React from "react";
import ExpenseForm from "./expense_form/expense_form";
import './new_expense.css'
const Newexpense = (props) =>{
    const onSave = (value) => {

        const expense_data = {
            ...value,
            id:Math.random().toString()
        }
        props.onAddExpense(expense_data)
        //console.log(expense_data);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSave={onSave}   //--> Callback function to access the values from children to parent
            />
        </div>
    )
}

export default Newexpense;