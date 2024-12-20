const express= require("express")
const {test,catchPokemonByPokemonId ,createPokemonStatus, getPokemonStatus, getPokemonByPokemonId, inTeamPokemonByPokemonId} = require("../controllers/pokemonController")
const router = express.Router();

router.get("/test",test)
router.get("/",getPokemonStatus)
router.get("/pokemonid/:pokemon_id",getPokemonByPokemonId)
router.post("/",createPokemonStatus)
router.put("/catch/:pokemon_id",catchPokemonByPokemonId)
router.put("/inteam/:pokemon_id", inTeamPokemonByPokemonId)

module.exports=router

// router.get("/test",(req,res)=>{
//     console.log("hello desde test")
//     res.send("hola desde routes").status(200)
// })