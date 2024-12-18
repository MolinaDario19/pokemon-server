const express= require("express")
const {test, createPokemonStatus, getPokemonStatus} = require("../controllers/pokemonController")
const router = express.Router();

router.get("/test",test)
router.get("/",getPokemonStatus)
router.post("/",createPokemonStatus)

module.exports=router

// router.get("/test",(req,res)=>{
//     console.log("hello desde test")
//     res.send("hola desde routes").status(200)
// })