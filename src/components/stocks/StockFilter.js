import react from 'react';
import './StockFilter.css';
import React, {useState} from 'react';

const StockFilter=(props)=>
{
    const dropDownChangeHandler =(event)=>{

        props.onChangeFilter(event.target.value)
    }

return (
    <div>
<div className='stock-filter'>
    <label className='stock-filter label'>Filter by Year</label>
    <select className='stock-filter select'value={props.selected} onChange={dropDownChangeHandler}>
        <option value='2018'>2018</option>
        <option value='2023'>2023</option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>

    </select>
</div>

    </div>
);
}
export default StockFilter;