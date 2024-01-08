var router = require("express").Router();
var Student = require('../Modal/index')




router.post("/",async(req,res)=>{
    const {name,clas,roll} = req.body

   let user = await Student.create({
        name,
        class:clas,
        roll 
       
       
      });
  
      return res.status(201).json({
        success: true,
        message: `Inser, ${user.name}`,
      });


});


router.get("/", async(req,res)=>{

    const users = await Student.find({});
    res.status(200).send({data:users});
    
});

router.put("/:Id", async(req,res)=>{
     const {Id}=req.params
   const {name,clas,roll} = req.body
   const student = await Student.findById(Id);
   if (name) student.name = name;
   if (clas) student.class = clas;
   if (roll) student.roll = roll;
   await student.save()
    res.status(200).json({
    success: true,
    message: "Student Updated Successfully",
  });
 

});

router.delete("/:Id", async(req,res)=>{
 const {Id}=req.params;
   const user = await Student.findById(Id);

  if (!user) return next(new ErrorHandler("Invalid Id", 400));

  await user.deleteOne();

  return res.status(200).json({
    success: true,
    message: "Student Deleted Successfully",
  });
  
  });

module.exports = router;