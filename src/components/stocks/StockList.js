import './StockList.css';
import StockItem from './StockItem'

const StockList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='stock-list__fallback'>No Expense Found</h2>;
    }

    return (
        <ul className='stock-list'>
            {
                props.items.map(ab => <StockItem
                    name={ab.name}
                    price={ab.price}
                    day={ab.day}
                    month={ab.month}
                    year={ab.year}
                    key={ab.id}
                    quantity={ab.quantity} />)
            }
        </ul>
    )

}
export default StockList;