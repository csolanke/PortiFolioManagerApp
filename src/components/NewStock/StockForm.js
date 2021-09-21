import './StockForm.css';
import React, {useState} from 'react';
const StockForm = () => {

    const [enteredName,setEnteredName] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value);
    }

    const dateChangeHandler=(event)=>{
       setEnteredDate(event.target.value)
    }

   const submitHandler=(event)=>{
       event.preventDefault();

   }


    const enteredData ={

        name: enteredName,
        price :enteredPrice,
        date : new Date(enteredDate)
    }
    console.log(enteredData);

    //  setEnteredDate('');
    //  setEnteredName('');
    //  setEnteredPrice('');


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
                <label>Date</label>
                <input type='date' min="2019-01-01" step ="2022-12-31" value ={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-stock__actions">
            <button type="submit">Add to Holdings</button>
            </div>

        </div>


    </form>

}

export default StockForm;