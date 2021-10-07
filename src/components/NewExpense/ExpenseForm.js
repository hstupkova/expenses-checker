import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onHideForm }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    onHideForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={enteredTitle} onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" min="0.01" step="0.01" value={enteredAmount} onChange={handleAmountChange} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input id="date" type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={handleDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onHideForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;