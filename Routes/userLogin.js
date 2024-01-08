var router = require("express").Router();
var User = require('../Modal/login')


router.post("/resgiter",async(req,res)=>{
  const {userName, password} = req.body
  let user = await User.create({
   userName: userName,
   password: password
   
   
  });

  return res.status(201).json({
    success: true,
    message: `Inser, ${user.userName}`,
  });

});

// Retrieve all Tutorials
router.get("/", async(req,res)=>{
    const users = await User.find({});
    res.status(200).send({data:users});
});

router.post("/login", async(req,res)=>{
  const {userName, password} = req.body
  console.log(userName)

  const users = await User.findOne({userName});
  if(users){
     if(users.password = password)
     res.status(200).send({message:"match",data:users});
    else
     res.status(400).send({"message":"Invalid"});

    
  }else
  res.status(400).send({"message":"Invalid"});

  

});


module.exports = router;