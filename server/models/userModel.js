const { default: mongoose } = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{type:String , required:true}, 
    age:{type:Number , required:true}, 
    username:{type:String , required:true}
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel