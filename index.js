import express from "express";

const app = express();
const PORT = 9000;


app.get("/",(req,res)=>{
    res.json("server started")
})


const Server = app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
