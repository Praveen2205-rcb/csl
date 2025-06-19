const exp=require("express");
const app=exp();
const path=require("path");
app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"index.html"))});
app.listen(3000,()=>{console.log("server running at http://localhost:3000")});
