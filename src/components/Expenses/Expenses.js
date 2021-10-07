import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState('2020');

  const handleFilter = (filter) => {
    setYear(filter);
  };

  const filteredExpenses = expenses.filter(item => item.date.getFullYear().toString() === year);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilter={handleFilter} selected={year} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
