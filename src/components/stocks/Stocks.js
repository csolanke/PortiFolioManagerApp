import StockItem from './StockItem';
import React, {useState} from 'react';

import Card from '../UI/Card'
import StockFilter from './StockFilter'

const Stocks = (props) => {

  const [filteredYear , setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  };

  const filteredStocks = props.stocks.filter(
    st=>{
    
      let convertedNum = Number(filteredYear);
      return st.year=== convertedNum;
    }
  );


console.log(filteredStocks.length);

  return (
   
   <div>

  
 <Card className="stocks">

 <StockFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></StockFilter> 
 
{filteredStocks.map(ab => <StockItem
  name={ab.name}
  price={ab.price}
  day={ab.day}
  month={ab.month}
  year={ab.year}
  key={ab.id} 
  quantity={ab.quantity} />)}

</Card>
   </div>
  )
}

export default Stocks;