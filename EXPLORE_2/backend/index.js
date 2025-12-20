import express from 'express';
const app = express();


app.get('/api/products', (req, res) => {
    const products = [
        { id: 1,
          name: 'book',
          price: 100 
        },

        { id: 2,
            name: 'pen',
            price: 150
        },
        { id: 3,
            name: 'eraser',
            price: 200
        },
        { id: 4,
            name: 'notebook',
            price: 250
        },
    ]
       if (req.query.search) {
        const filterProducts = products.filter(product => 
            product.name.includes(req.query.search))
            res.send(filterProducts);
            return;
       }

      setTimeout(() => {
        res.send(products);
        }, 3000); // Simulate a 3-second delay
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});