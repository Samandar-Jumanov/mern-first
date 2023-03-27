const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const UserModel = require('./models/userModel')

//Db connection 
mongoose.connect('mongodb+srv://samandarjumanov:sShV75HDK8aq2sDB@cluster0.jtfbknu.mongodb.net/secondmern?retryWrites=true&w=majority')
.then(()=>{console.log('Connect to the db succesfully')})
.catch((err)=>console.log(err))




//Middlewares 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))



//Routes 
app.get('/v1/user', async( request , response )=>{
  try{
  const user =  await  UserModel.find({})
   response.json(user)
  }  catch(err){
    response.json(err)
  }
})


app.post('/v1/user',async  (request, response )=>{
  const user = request.body 
  const newUser =  await new UserModel(user)
  await newUser.save()
  response.json(newUser)
})



app.listen(3001, ()=>{
  console.log('Sever is active ')
})


