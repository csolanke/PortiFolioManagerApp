import './NewStock.css'
import StockForm from './StockForm'
const NewStock = (props) => {

    const stockDataSaveHandler=(stockData)=>{

        const StockDataFromNewStock ={
         ...stockData
        }
    props.onNewStock(StockDataFromNewStock);
    }

    return <div className="new-stcok">
       <StockForm onSaveOfStockData={stockDataSaveHandler}></StockForm>
    </div>

}
export default NewStock;