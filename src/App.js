import './App.css';
import { useState , useEffect} from 'react';
import Stocks from './components/stocks/Stocks';
import NewStock from './components/NewStock/NewStock'

const App = () => {

 const [initialList,setInitialList]=useState([]);

 // added fetchIntialStocksHandler method pointer Inside useEffect Hook and provided no values inside array in that way this fetchIntialStocksHandler will get invoke only once 
//during first rendering of this component. 
 useEffect(fetchIntialStocksHandler,[]);

//  method for rest api call to backend to fetch stocks
  async function fetchIntialStocksHandler()
  {
    const response =await fetch('/api/v1/stocks');
    const data = await response.json();

    const transformedStocks =data.map((std)=>{

      const myArray =std.purchaseDate.split('-');
      return {
        id : std.id,
        name: std.name,
        price: std.pricePurchased,
        day :myArray[0],
        month :myArray[1],
        year : myArray[2],
        quantity :std.quantityPurchased
      }
    });
  
    console.log(transformedStocks);
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
      <Stocks stocks={initialList}></Stocks>
    </div>
  );
}

export default App;
