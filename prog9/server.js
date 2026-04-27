const express=require("express");
const app=express();

app.use(express.json());
app.use(express.static("public"));

let users=[],results=[];

app.post("/register",(req,res)=>{
  users.push(req.body);
  res.send("Registered");
});

app.post("/login",(req,res)=>{
  let u=users.find(x=>x.username==req.body.username && x.password==req.body.password);
  res.send(u?"Success":"Fail");
});

app.post("/submit",(req,res)=>{
  results.push(req.body);
  res.send("Saved");
});

app.get("/results",(req,res)=>res.json(results));

app.listen(3000,()=>console.log("Running"));