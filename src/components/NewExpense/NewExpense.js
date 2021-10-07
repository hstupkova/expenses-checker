import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [formShown, setFormShown] = useState(false);

  const handleClick = () => {
    setFormShown(true);
  };

  const hideForm = () => {
    setFormShown(false);
  }

  const handleSaveExpenseData = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!formShown && <button onClick={handleClick}>Add New Expense</button>}
      {formShown && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onHideForm={hideForm} />}
    </div>
  );
};

export default NewExpense;
