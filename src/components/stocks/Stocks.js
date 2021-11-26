import StockList from './StockList';
import React, { useState } from 'react';

import Card from '../UI/Card'
import StockFilter from './StockFilter'
import StocksChart from './StocksChart'

const Stocks = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredStocks = props.stocks.filter(
    st => {
     // let convertedNum = Number(filteredYear);
      return st.year === filteredYear;
    }
  );

  return (

    <div>
      <Card className="stocks">
        <StockFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></StockFilter>
      
       <StocksChart stocks={filteredStocks}></StocksChart>

        <StockList items={filteredStocks}></StockList>
      </Card>
    </div>
  )
}

export default Stocks;