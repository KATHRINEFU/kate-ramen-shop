# Kate Ramen Shop
This project is a full-stack application for a ramen shop. It includes a frontend built with Vite, React, and TypeScript and a backend built with Node.js and Express. The system allows users to select ramen, customize their orders (meat, spicy level, noodle type), and add them to a shopping cart. Once an order is placed, the backend processes the request, updates the inventory, and tracks sales.

## Run Project
### Pre requirement
NodeJS, npm

### run backend
cd to the backend folder \
run: npm install \
run: npm run dev \
\
The backend server will be running on http://localhost:8000.
### run frontend
Open a new terminal and cd to the frontend folder \
run: npm install \
run: npm run dev \
\
The frontend will be running on http://localhost:5173.

## API Endpoints
POST /order
```
{
  [
    { 
      "id": 3
      "name": "Tonkotsu Ramen", 
      "meat": "pork", 
      "spicyLevel": "regular", 
      "noodleType": "ramen" 
    }
  ]
}
```
Response:
201: Order placed successfully
400: Invalid order or out of stock
\

GET /inventory
```
[
  { "id": 1, "name": "Tonkotsu Ramen", "stock": 100 },
  { "id": 2, "name": "Shoyu Ramen", "stock": 100 },
  // ...
]
```

GET /sales
```
[
  { "name": "Tonkotsu Ramen", "quantity": 10 },
  { "name": "Shoyu Ramen", "quantity": 5 },
  // ...
]
```


