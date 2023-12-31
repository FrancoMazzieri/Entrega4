import express from "express";
import ProductManager from "./controllers/ProductManager.js";

const product = new ProductManager()

const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/products", async (req, res) => {
    res.send(await product.getProduct())

})
app.get("/products/:id", async (req, res) => {
    let id = req.params.id
    res.send(await product.getProductById(id))

})


app.post("/products", async (req, res) => {
    let newProduct = req.body
    res.send(await product.addProducts(newProduct))
})
app.put("/products/:id", async(req, res) =>{
    let id = req.params.id
    let updateProducts = req.body
    res.send(await product.updateProducts(id, updateProducts))
} )    

app.delete("/products/:id", async(req, res) =>{
    let id = req.params.id
    res.send(await product.deleteProduct(id))
} )

app.listen(port, () => {
    console.log(`Servidor express puerto ${port}`)
})