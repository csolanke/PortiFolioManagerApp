import StockList from './StockList';
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

  return (

    <div>
      <Card className="stocks">
        <StockFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></StockFilter>
        <StockList items={filteredStocks}></StockList>
      </Card>
    </div>
  )
}

export default Stocks;