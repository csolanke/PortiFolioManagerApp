import './StockDate.css'
const StockDate=(props) => {
    return (
        <div className='stock-date'>
           <div className='stock-date__day'>{props.day}</div>
            <div className='stock-date__month'>{props.month}</div>
            <div className='stock-date__year'>{props.year}</div>
        </div>
    );


}
export default StockDate;