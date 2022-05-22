import './ExpenseFilter.css';

const ExpensesFilter = () => {
  let currentYear = new Date().getFullYear();
  const rangeYear = [];

  for (let i = 0; i < 4; i++) {
    rangeYear.push(currentYear--);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select>
          {rangeYear.map((year, index) => (
            <option value={year} key={index}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
