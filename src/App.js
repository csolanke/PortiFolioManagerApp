import './App.css';
import Stocks from './components/stocks/Stocks';
import NewStock from './components/NewStock/NewStock'

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
     <NewStock/>
     <Stocks stocks={stocks}></Stocks>
    </div>
  );
}

export default App;
