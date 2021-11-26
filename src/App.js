import './App.css';
import { useState , useEffect} from 'react';
import Stocks from './components/stocks/Stocks';
import NewStock from './components/NewStock/NewStock'

const App = () => {

 const [intialList,setInitialList]=useState([]);

 // added fetchIntialStocksHandler method pointer Inside useEffect Hook and provided no values inside array in that way this fetchIntialStocksHandler will get invoke only once 
//during first rendering of this component. 
 useEffect(fetchIntialStocksHandler,[]);

//  method for rest api call to backend to fetch stocks
  async function fetchIntialStocksHandler()
  {
    const response =await fetch('/api/v1/stocks');
    const data = await response.json();

    const transformedStocks =data.map((std)=>{
      return {
        id : std.id,
        name: std.name,
        price: std.pricePurchased,
        day :22,
        month : 'November',
        year : 2021,
        quantity :std.quantityPurchased
      }
    });
  
    setInitialList(transformedStocks);
  }

  const stockDataHandler = (stockdata) => {
    setInitialList((prevList) => {
      return [...prevList, stockdata];
    });
  };

  return (
    <div>
      <NewStock onNewStock={stockDataHandler} />
      <Stocks stocks={intialList}></Stocks>
    </div>
  );
}

export default App;
