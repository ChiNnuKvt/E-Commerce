const mongoose = require('mongoose')
const connectDatabase=()=>{
    try{
        const connection = mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        .then(()=>{console.log("Database is connected")})
        .catch((err)=>{console.log("Database connection failed")})
    }catch(error){
        console.log('Error')
    }
}
module.exports = connectDatabase;