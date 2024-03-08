const mongoose = require('mongoose')

const connectDb = async()=>{
    mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log('Mongo connecter'))
        .catch((error) => console.log('Erreur' , error))
}

module.exports = connectDb
