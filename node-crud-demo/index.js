const express = require('express');
const mongoose = require('mongoose');
const app = express()
const productRouter = require('./routes/product.route.js')
const Product = require('./models/product.model.js')


app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use("/api/products", productRouter)

let port = 8088;
//监听端口
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`)
})

app.get("/",(resq,res)=>{
    res.send("hello from node API  server")
})



// //获取所有产品
// app.get("/api/products",async (req,res)=>{
//     try{
//         const products = await Product.find({})
//         res.status(200).json(products)}
//     catch(err){
//         res.status(500).json({
//             message:err.message
//         })
//     }
// })



// //通过id获取商品
// app.get("/api/products/:id",async (req,res)=>{
//     try{
//         const {id} = req.params
//         const product = await Product.findById(id)
//         res.status(200).json(product)}
//     catch(err){
//         res.status(500).json({
//             message:err.message
//         })
//     }
// })


// //接收post请求
// app.post("/api/products",
// )



// //更新商品信息
// app.put("/api/products/:id",async (req,res)=>{
//     try{
//         const {id} = req.params
//         const product = await Product.findByIdAndUpdate(id,req.body)
//         if(!product){
//             return res.status(404).json({
//                 message:`cannot find any product with ID ${id}`
//             })
//         }
    
//         const updatedProduct = await Product.findById(id)
//         res.status(200).json(updatedProduct)
//     }
//     catch(err){
//         res.status(500).json({
//             message:err.message
//         })
//     }
// })



// //删除商品
// app.delete("/api/products/:id",async (req,res)=>{
//     try {
//         const { id } = req.params;
    
//         const product = await Product.findByIdAndDelete(id);
    
//         if (!product) {
//           return res.status(404).json({ message: "Product not found" });
//         }
    
//         res.status(200).json({ message: "Product deleted successfully" });
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     }
// )






mongoose.connect("mongodb://localhost:27017/nodeapi",{
   
}).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.error(err,"error connecting to mongodb")
});

