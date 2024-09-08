import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let  users = [
  {
    "firstName": "siddaram",
    "lastName": "kusur",
    "Age": 23
  },
  {
    "firstName": "raj",
    "lastName": "kusur",
    "Age": 23
  },
];

// Handle GET request to /users
router.get('/', (req, res) => {
  res.send(users);
});

// Handle POST request to /users
router.post('/', (req, res) => {
  const user = req.body;
  
  // Fix the issue of adding a new user
  users.push({ ...user, id: uuidv4() });
  
  res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get('/:id', (req,res)=>{
  const { id }=req.params;
  const foundUser = user.find((user)=>user.id===id);
  res.send(foundUser);
});
router.delete('/:id', (req,res)=>{
  const {id}=req.params;
  users = users.filter((user)=> user.id !==id);
  res.send(`user with the id ${id} deleted from the database`);
});

router.patch('/:id', (req,res)=>{
  const {id}=req.params;
  const {firstName,lastName,Age}=req.body;

  const user = users.find((user)=>user.id ===id);
  if(firstName){
    user.firstName=firstName;
  }
  if(lastName){
    user.firstName=lastName;
  }
  if(Age){
    user.firstName=Age;
  }
  res.send(`user with the id ${id} has been updated`);


})
export default router;







// import express from "express";
// import {v4 as uuidv4} from 'uuid';


// const router = express.Router();
// const users =[
//   {
//     "firstName":"siddaram",
//     "lastName":"kusur",
//     "Age":23
//   },
//   {
//     "firstName":"raj",
//     "lastName":"kusur",
//     "Age":23
//   },
// ]
// //all routers already starting with /users so we are using with only forward slash
// router.get('/',(req,res)=>{
//   // console.log(users);
//   res.send(users);
//   // res.send('hello');
// });

// router.post('/', (req,res)=>{
//   // console.log('POST ROUTE REACHED');
//   const user =req.body;
 
//   users.push(...user, uuidv4());
//   res.send(`User with the name ${user.firstName} added to the database!`);
// });
// export  default router;