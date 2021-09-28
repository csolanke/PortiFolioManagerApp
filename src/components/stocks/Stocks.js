import StockItem from './StockItem';
import Card from '../UI/Card'

const Stocks = (props) => {

  return (
    <Card className="stocks">

      {props.stocks.map(ab => <StockItem
        name={ab.name}
        price={ab.price}
        day={ab.day}
        month={ab.month}
        year={ab.year}
        key={ab.id}  />)}

    </Card>
  )
}

export default Stocks;