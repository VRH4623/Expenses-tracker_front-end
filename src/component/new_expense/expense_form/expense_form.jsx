import React, { useState } from "react";
import './expense_form.css';

const  ExpenseForm = (props) =>{
    const [enteredTitle, setenteredTitle]= useState ('');
    const [enteredamt,setenteredamt]= useState ('');
    const [enteredDate,setenteredDate]= useState ('');

    const onTitleChange = (event) => setenteredTitle(event.target.value);
    const onAmountChange = (event) => setenteredamt(event.target.value);
    const onDateChange = (event) => setenteredDate(event.target.value);

    const onExpenseSubmit = (event) => {
        event.preventDefault();  //--> to prevent page reload
        //console.log(enteredTitle,enteredamt,enteredDate);
        const new_expenses = {
            title : enteredTitle,
            amount : enteredamt,
            date : new Date(enteredDate),
        }
        props.onSave(new_expenses)
    };

    return (
        <form onSubmit={onExpenseSubmit}>
            <div className="new-expense__controls"> {/* Details container */}
                <div className="new-expense__control">
                    {/* title */}
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={onTitleChange} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    {/* amount */}
                    <label htmlFor="amount">Amount </label>
                    <input type="number" name="amount" id="amount" min="0" onChange={onAmountChange} value={enteredamt}/>
                </div>
                <div className="new-expense__control">
                    {/* date */}
                    <label htmlFor="date">Date </label>
                    <input type="date" name="date" id="date" onChange={onDateChange} value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions"> {/* Button container */}
                <button>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm