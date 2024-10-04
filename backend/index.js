const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

let inventory = [
    { id: 1, name: 'Shoyu Ramen', stock: 100 },
    { id: 2, name: 'Miso Ramen', stock: 100 },
    { id: 3, name: 'Tonkotsu Ramen', stock: 100 },
    { id: 4, name: 'Spicy Ramen', stock: 100 },
    { id: 5, name: 'Vegetarian Ramen', stock: 100 },
    { id: 6, name: 'Seafood Ramen', stock: 100 },
    { id: 7, name: 'Butter Ramen', stock: 100 },
    { id: 8, name: 'Garlic Ramen', stock: 100 }
  ];

let orders = [];
let sales = [];

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
  }));

app.get('/', (req, res) => {
  res.send('Ramen Vending Kiosk API is running');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.post('/order', (req, res) => {
    const order = req.body;
    console.log(order);
    if (!order || order.length === 0) {
      return res.status(400).send('Invalid order');
    }

    for (let item of order) {
        const ramenInventory = inventory.find(r => r.id === item.id);
    
        if (!ramenInventory || ramenInventory.stock <= 0) {
          return res.status(400).send(`Out of stock: ${item.name}`);
        }
    }

    order.forEach(item => {
        const ramenInventory = inventory.find(r => r.id === item.id);
        if (ramenInventory && ramenInventory.stock > 0) {
          ramenInventory.stock -= 1;
        }
    
        const existingSale = sales.find(sale => sale.id === item.id);
        if (existingSale) {
          existingSale.quantity += 1;
        } else {
          sales.push({ id: item.id, name: item.name, quantity: 1 });
        }
    });
    
  
    orders.push(order);
  
    res.status(200).send('Order placed successfully');
});
  
app.get('/sales', (req, res) => {
    res.json(sales);
});

app.get('/inventory', (req, res) => {
    res.json(inventory);
});
  