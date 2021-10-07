import './StockForm.css';
import React, {useState} from 'react';
const StockForm = (props) => {

 

    const [enteredName,setEnteredName] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [enteredQuantity,setEnteredQuantity] = useState('');

    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value);
    }

    const dateChangeHandler=(event)=>{
       setEnteredDate(event.target.value)

     
    }

    const quantityChangeHandler=(event)=>{
        setEnteredQuantity(event.target.value)
 
      
     }

   const submitHandler=(event)=>{
       event.preventDefault();


       const date = new Date(enteredDate);
       let  month = date.toLocaleString('en-US',{month:'long'});
       let  day = parseInt(date.toLocaleString('en-US',{day:'2-digit'}));
       let year =date.getFullYear();

       const enteredData ={

        name: enteredName,
        price :enteredPrice,
        day : day +1  ,
        month : month,
        year : year,
        id : Math.random,
        quantity :enteredQuantity
    }
   
    //console.log(enteredData);
    props.onSaveOfStockData(enteredData);

     setEnteredDate('');
     setEnteredName('');
     setEnteredPrice('');
     setEnteredQuantity('');

   }

    return <form onSubmit={submitHandler}>
        <div className="new-stock__controls">

            <div className="new-stock__control">
                <label>Name</label>
                <input type='text' value ={enteredName} onChange={nameChangeHandler}/>
            </div>

            <div className="new-stock__control">
                <label>Price</label>
                <input type='number' value ={enteredPrice} onChange={priceChangeHandler}/>
            </div>

            <div className="new-stock__control">
                <label>Quantity</label>
                <input type='number' value ={enteredQuantity} onChange={quantityChangeHandler}/>
            </div>

            <div className="new-stock__control">
                <label>Date</label>
                <input type='date'  value ={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-stock__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add to Holding</button>
            </div>

        </div>


    </form>

}

export default StockForm;