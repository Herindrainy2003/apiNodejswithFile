const express = require('express')
const router = express.Router()
const PubController = require('../Controller/PubController')
const multer = require('multer')

//ajoutez pub
const storage = multer.diskStorage({
    destination : (req , file , cb)=>{
        cb(null , 'uploads/' )
    } ,
    filename : (req , file , cb) =>{
        cb(null ,Date.now() + '-' + file.originalname)
    }
})

const  upload = multer({storage})

router.post('/addPub' , upload.single('image') , PubController.addPub )

//afficher tous le  pub
router.get('/' , PubController.getPub)

//afficer un seule pub
router.get('/:id' , PubController.getPubId)

//mettre a jour
router.put('/:id' ,  upload.single('image') , PubController.updatePub)

//delete
router.delete('/:id' , PubController.deletePub)



module.exports = router;