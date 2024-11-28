const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/msTwo',(req,res)=>{
    res.json({
        answer: "This is MicroServiceTwo",
    })
});

app.listen(PORT,()=>{
    console.log(`The Server is running in port ${PORT}`);
})