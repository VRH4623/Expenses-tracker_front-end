import React, { useState } from "react"
import './ExpenseItem.css'
import ExpenseDate from "../Expense_date/ExpenseDate";
const ExpenseItem = (props) => {  // Component == function , should start with Capital Letter
    //const {date = new Date(),title='',amount=0} = props; // object destructing

    // let {date = new Date(),title='',amount=0} = props; // object detructing 

    const[ a, setTitle] = useState(props.title)  // gives {title, setTitle}  ---> Hook concept
    const[ date, setDate] = useState(props.date)
    const[ amt, setamt] = useState(props.amount)
    
    // function onChangeClick (event) {
    //     setTitle('Updated'); 
    //     setDate(new Date());
    //     setamt(0);                       
    //     //console.log(title)
    // }
    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{a}</h2>
                <div className="expense-item__price">₹{amt}</div>
            </div>
            {/* <button onClick={onChangeClick} >Change_Data</button> */}
        </div>
    )
}


export default ExpenseItem