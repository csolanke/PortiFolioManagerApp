import StockItem from './StockItem';
import Card from '../UI/Card'

const Stocks =(props)=> {

    return (
        <Card className="stocks">

      <StockItem name={props.stocks[0].name} price={props.stocks[0].price} day={props.stocks[0].day}  month={props.stocks[0].month} year={props.stocks[0].year} ></StockItem>
      <StockItem name={props.stocks[1].name} price={props.stocks[1].price} day={props.stocks[1].day} month={props.stocks[1].month} year={props.stocks[1].year}></StockItem>
      <StockItem name={props.stocks[2].name} price={props.stocks[2].price} day={props.stocks[2].day} month={props.stocks[2].month} year={props.stocks[2 ].year}></StockItem>

        </Card>
    )
}

export default Stocks;