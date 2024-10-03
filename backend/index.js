const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

let orders = [];
let sales = [];

app.get('/', (req, res) => {
  res.send('Ramen Vending Kiosk API is running');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.post('/order', (req, res) => {
    const order = req.body;
    if (!order || !order.items || order.items.length === 0) {
      return res.status(400).send('Invalid order');
    }
  
    orders.push(order);
  
    order.items.forEach(item => {
      const existingSale = sales.find(sale => sale.name === item.name);
      if (existingSale) {
        existingSale.quantity += 1;
      } else {
        sales.push({ name: item.name, quantity: 1 });
      }
    });
  
    res.status(200).send('Order placed successfully');
  });
  
app.get('/sales', (req, res) => {
    res.json(sales);
});
  