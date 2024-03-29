import React ,{useState} from 'react'
import './NewStock.css'
import StockForm from './StockForm'
const NewStock = (props) => {

    const [isEditing ,setIsEditing] = useState(false);

    const stockDataSaveHandler=(stockData)=>{

        const StockDataFromNewStock ={
         ...stockData
        }
    props.onNewStock(StockDataFromNewStock);
    setIsEditing(false);
    };

    const startEditingHandler=()=>
    {
        setIsEditing(true);
    }

    const stopEditingHandler=()=>{
        setIsEditing(false);
    }

    return <div className="new-stcok">
      
      {
          !isEditing && (
              <div align="center"><button onClick={startEditingHandler} 
               align='center'
               style={{backgroundColor: "lightblue", height:'3rem', width:'10rem'}}
              
               >Add New Stock</button></div>
          )
      }

      { isEditing && (<StockForm onSaveOfStockData={stockDataSaveHandler}
      onCancel={stopEditingHandler}></StockForm>)

      }
       
    </div>

}
export default NewStock;