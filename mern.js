const express = require('express');
const axios = require('axios'); 
const app = express();

async function getProducts() {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN+'products');
    console.log(response);
    return (await response).data;
}
app.get('/products', async (req, res) => {
    const products = await getProducts();
    res.send(products);
})
app.get('/products/:id', async (req, res) => {
    const products = await getdetails(req.params.id);
    res.send(products);
})
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!')
   
})  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
async function getdetails(id) {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN+'products/'+id);
    return (await response).data;
}
