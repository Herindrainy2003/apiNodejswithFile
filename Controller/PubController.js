const PubSchema = require('../Models/PubScema')
const path = require('path')


//AJOUTEZ PUB
exports.addPub = ((req , res) =>{

   const imagePath = path.join(__dirname , '../' , req.file.path)

    PubSchema.create({
     title : req.body.title  ,
      image : imagePath
    })
      
    .then(()=>{
            res.status(201).json({message : 'requete bien recue'})
        })
        .catch((error)=>{
            res.status(500).json({erreur :  error.message})
        })
})


//Afficher tous les PUB

exports.getPub = (req, res)=>{
    PubSchema.find()
        .then((result)=> res.send(result))
        .catch((error) => res.send(error))
}

//Afficher un seule pub
exports.getPubId = (req , res) =>{
    let id = req.params.id
    PubSchema.findById(id)
        .then((result) => res.send(result))
        .catch((error) => res.send(error))
}

//mise a jour
exports.updatePub = (req, res)=>{
    let id = req.params.id;
    const imagePath = path.join(__dirname , '../' , req.file.path);
    PubSchema.updateOne({_id : id , image : imagePath })
        .then(()=> res.status(200).json({message : 'Mise a jour bien effectuer'}))
        .catch((e)=> res.status(500).json({error : e.message}))
}

//delete 
exports.deletePub = (req,  res)=>{
    let id = req.params.id;
    PubSchema.deleteOne({_id : id})
        .then(()=> res.status(200).json({message : 'pub bien supprimmer'}))
        .catch((e) => res.status(500).json({error : e.message}))
}