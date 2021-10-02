import StockItem from './StockItem';
import React, { useState } from 'react';

import Card from '../UI/Card'
import StockFilter from './StockFilter'

const Stocks = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredStocks = props.stocks.filter(
    st => {
      let convertedNum = Number(filteredYear);
      return st.year === convertedNum;
    }
  );

let stockContent = <p>No Expense Found</p>

if(filteredStocks.length> 0)
{
  stockContent = (filteredStocks.map(ab => <StockItem
    name={ab.name}
    price={ab.price}
    day={ab.day}
    month={ab.month}
    year={ab.year}
    key={ab.id}
    quantity={ab.quantity} />))

}

  return (

    <div>
      <Card className="stocks">
        <StockFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></StockFilter>
       {stockContent}
      </Card>
    </div>
  )
}

export default Stocks;