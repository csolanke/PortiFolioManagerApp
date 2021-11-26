import React from 'react';
import Chart from '../Chart/Chart';

const StocksChart =(props)=>
{

    const chartDataPoints =[

        {label: 'Jan', value:0},
        {label: 'Feb', value:0},
        {label: 'Mar', value:0},
        {label: 'Apr', value:0},
        {label: 'May', value:0},
        {label: 'Jun', value:0},
        {label: 'Jul', value:0},
        {label: 'Aug', value:0},
        {label: 'Sep', value:0},
        {label: 'Oct', value:0},
        {label: 'Nov', value:0},
        {label: 'Dec', value:0},
      
    ];

    for(const stock of props.stocks)
    {
        let stockMonth = -1;
        if( stock.month === 'Jan')  
        {
            stockMonth = 0;
        }
        else if (stock.month === 'Feb')
        {
            stockMonth = 1;
        }
        else if (stock.month === 'Mar')
        {
            stockMonth = 2;
        }
        else if (stock.month === 'Apr')
        {
            stockMonth = 3;
        }
        else if (stock.month === 'May')
        {
            stockMonth = 4;
        }
        else if (stock.month === 'Jun')
        {
            stockMonth = 5;
        }
        else if (stock.month === 'Jul')
        {
            stockMonth = 6;
        }
        else if (stock.month === 'Aug')
        {
            stockMonth = 7;
        }
        else if (stock.month === 'Sept')
        {
            stockMonth = 8;
        }
        else if (stock.month === 'Oct')
        {
            stockMonth = 9;
        }
        else if (stock.month === 'Nov')
        {
            stockMonth = 10;
        }
        else if (stock.month === 'Dec')
        {
            stockMonth = 11;
        }

        chartDataPoints[stockMonth].value += stock.price;
    }

return (
    <Chart dataPoints ={chartDataPoints}/>
);
}
 
export default StocksChart;