const router = require("express").Router();

router.post("/", (req, res)=>{
    const body = req.body;
    console.log(body)
})