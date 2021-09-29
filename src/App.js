import './App.css';
import {useState} from 'react';
import Stocks from './components/stocks/Stocks';
import NewStock from './components/NewStock/NewStock'

const App = () => {

 
  const initial_stocks = [
    {
      id : 1,
      name: 'EPL',
      price: 450,
      day: 17,
      month: 'September',
      year: 2021,
      quantity : 30
    },
    {
      id : 2,
      name: 'ITC',
      price: 230,
      day: 18,
      month: 'March',
      year: 2021,
      quantity : 30
    },
    {
      id : 3,
      name: 'HFCL',
      price: 2000,
      day: 18,
      month: 'May',
      year: 2021,
      quantity : 30

    }

  ]

  const [list,setList] = useState(initial_stocks);

  const stockDataHandler=(stockdata)=>
  {
   // console.log(stockdata)
    setList((prevList)=>
    {
     // console.log(prevList);
      return [...prevList,stockdata];
    });
  };

  return (
    <div>
     <NewStock onNewStock={stockDataHandler}/>
     <Stocks stocks={list}></Stocks>
    </div>
  );
}

export default App;
