const express=require("express");
const fs=require("fs");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>res.send("Server Running"));

app.post("/save-user",(req,res)=>{
  const file="users.json";
  const users=fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file))
    : [];

  users.push(req.body);
  fs.writeFileSync(file,JSON.stringify(users,null,2));

  res.json({message:"User Saved"});
});

app.listen(5500,()=>console.log("Server started"));