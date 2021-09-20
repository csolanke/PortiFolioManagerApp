import './StockForm.css';
const StockForm = () => {

    return <form>
        <div className="new-stock__controls">

            <div className="new-stock__control">
                <label>Name</label>
                <input type='text' />
            </div>

            <div className="new-stock__control">
                <label>Price</label>
                <input type='number' />
            </div>

            <div className="new-stock__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" step ="2022-12-31"/>
            </div>
            <div className="new-stock__actions">
            <button type="submit">Add to Holdings</button>
            </div>

        </div>


    </form>

}

export default StockForm;