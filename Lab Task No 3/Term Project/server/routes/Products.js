import express from 'express'
import { allProducts,newProduct,updateProduct,deleteProduct } from '../controllers/Products.js'



const router = express.Router()
router.get("/allProducts",allProducts)
router.post("/addNewProduct",newProduct)
router.put("/updateProduct/:id",updateProduct)
router.delete("/deleteProduct/:id",deleteProduct)


export default router