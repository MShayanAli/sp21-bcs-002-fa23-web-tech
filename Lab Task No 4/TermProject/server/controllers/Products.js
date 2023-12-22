import { Product } from '../models/Products.js'

export const allProducts = async(req,res)=>{
        
    let products  = await Product.find({})

    return res.json({
      products
    })

}

export const newProduct = async (req, res) => {

    const {productName,price,description} = req.body 

    await Product.create({
        productName,price,description
    })

    return res.json({
        success:true
    })

}

export const updateProduct = async(req,res)=>{
    
    try {
        const {productName,price,description} = req.body
        const product = await Product.findById(req.params.id);
    
        product.productName = productName
        product.price = price
        product.description = description
     
       await product.save()
        res.json({
            success:true,
            msg:"Product Updated",
        })
    } catch (error) {
        console.log(error)
    }

}
export const deleteProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if (!product)
    {
       return res.status(404).json({
           success:false,
           msg:"Product Not Exists"
       })
    }   
    
    await product.deleteOne();
    res.status(200).json({
       success:true,
       msg:"Product Deleted"
    }) 
}

