const Ajv = require("ajv");
var ajv = new Ajv();
const GameSchema = {
    type:"object",
    properties:{
        
    },
    required:[],
    additionalProperties:false
}
const GameValidate = ajv.compile(GameSchema);

module.exports = GameValidate;

