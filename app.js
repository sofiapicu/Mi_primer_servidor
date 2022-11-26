const express = require("express");
const app = express();

const PUERTO = 3000 || process.env.PORT;
const dir = `${__dirname}/emercado-api-main`;

// Router
const routerApi = express.Router();
app.use("/emercado-api", routerApi)

// carrito de usuario 25801
routerApi.get("/user_cart/", (req, res) => {
    res.sendFile(dir + `/user_cart/25801.json`);
});

// venta
routerApi.get("/sell/", (req, res) => {
    res.sendFile(dir + `/sell/publish.json`);
});

// comentarios de productos
routerApi.get("/products_comments/:prodComId", (req, res) => {
    const prodComId = req.params.prodComId;
    res.sendFile(dir + `/products_comments/${prodComId}.json`);
});

// productos
routerApi.get("/products/:prodId", (req, res) => {
    const prodId = req.params.prodId;
    res.sendFile(dir + `/products/${prodId}.json`);
});

// productos de la categoria 
routerApi.get("/cats_products/:catId", (req, res) => {
    const catId = req.params.catId;
    res.sendFile(dir + `/cats_products/${catId}.json`);
});

// categorias
routerApi.get("/cats/", (req, res) => {
    res.sendFile(dir + `/cats/cat.json`);
});

// carrito
routerApi.get("/cart/", (req, res) => {
    res.sendFile(dir + `/cart/buy.json`);
});

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando el puerto ${PUERTO}`);
});