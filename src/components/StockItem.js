import './StockItem.css'
import StockDate from './StockDate'
import Card from './Card'


const StockItem = (props)=> {

    return (

  <Card className='stock-item'>

        <StockDate day={props.day} month={props.month} year={props.year}></StockDate>
        <div className='stock-item__description'>
            <h2 align='center'>{props.name}</h2>
        </div>
        <div className='stock-item__price'>{props.price}</div>
        <div>
            <button>Save</button>
        </div>
    </Card>
        
    );

}

export default StockItem;