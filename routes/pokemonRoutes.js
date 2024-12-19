const express= require("express")
const {test,catchPokemonByPokemonId ,createPokemonStatus, getPokemonStatus, getPokemonByPokemonId} = require("../controllers/pokemonController")
const router = express.Router();

router.get("/test",test)
router.get("/",getPokemonStatus)
router.get("/pokemonid/:pokemon_id",getPokemonByPokemonId)
router.post("/",createPokemonStatus)
router.put("/catch/:pokemon_id",catchPokemonByPokemonId)


module.exports=router

// router.get("/test",(req,res)=>{
//     console.log("hello desde test")
//     res.send("hola desde routes").status(200)
// })