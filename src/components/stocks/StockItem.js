import React,{ useState } from 'react';
import './StockItem.css'
import StockDate from './StockDate'
import Card from '../UI/Card'


const StockItem = (props)=> {

    const [name , setName] = useState(props.name);
    const [price , setPrice] = useState(props.price);

    function clickHandler(){
        setName('EICHERS MOTORS');
        setPrice(2000);
        console.log("clicked!!!!")
    }
    return (

  <Card className='stock-item'>

        <StockDate day={props.day} month={props.month} year={props.year}></StockDate>
        <div className='stock-item__description'>
            <h2 align='center'>{name}</h2>
        </div>
        <div className='stock-item__price'>{price}</div>
        <div>
            <button onClick={clickHandler}>Save</button>
        </div>
    </Card>
        
    );

}

export default StockItem;