import logo from './logo.svg';
import './App.css';
import Stocks from './components/Stocks';
import StockItem from './components/StockItem';

const App = () => {

  const stocks = [
    {
      name: 'EPL',
      price: 450,
      day: 17,
      month: 'September',
      year: 2021
    },
    {
      name: 'ITC',
      price: 230,
      day: 18,
      month: 'March',
      year: 2021
    },
    {
      name: 'HFCL',
      price: 2000,
      day: 18,
      month: 'May',
      year: 2021

    }

  ]

  return (
    <div>
      <h1 align="center">PORTFOLIO MANAGER</h1>
     <Stocks stocks={stocks}></Stocks>
    </div>
  );
}

export default App;
