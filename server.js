const express = require('express');
const cors = require('cors');
const pool = require('./db');
const PORT = process.env.PORT = 5000;


const app = express();
app.use(cors());
app.use(express.json());

app.get('/list', async (req, res) => {
    const result = await pool.query('SELECT * FROM transactions');
    res.json(result.rows)
})

app.get('/totalitems', async (req, res) =>{
    const result = await pool.query("SELECT SUM(item_price) AS this_is_sum FROM transactions WHERE item_category !='Income'")
    res.json(result.rows)
})

app.get('/getlast', async (req, res) => {
    const result = await pool.query('SELECT * FROM transactions ORDER BY item_id DESC LIMIT 10')
    res.json(result.rows);
})

app.get('/api/v1/income', async (req, res) => {
    const result = await pool.query("SELECT SUM(item_price) FROM transactions WHERE item_category = 'Income'");
    res.status(200).json(result.rows);
})

app.post('/api/v1/newtransaction', async (req, res) => {

    const { new_Month } = req.body;
    const { new_Day } = req.body;
    const { new_Year } = req.body;
    const { new_Amount } = req.body;
    const { new_Name } = req.body;
    const { new_category } = req.body;

    const int_Day = parseInt(new_Day);
    const int_Year = parseInt(new_Year);
    const int_Amount = parseFloat(new_Amount);

    try {
        const result = await pool.query('INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
                    [new_Month, int_Day, int_Year, new_Name, int_Amount, new_category]);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
    
})


app.delete('/item/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM transactions WHERE item_id = $1 RETURNING *', [id])
        res.json(result)
    } catch (error) {
        console.log(error)
    }
})



app.listen(PORT, () =>{
    console.log(`Running on a PORT ${PORT}`);
})