const Ajv = require("ajv");
var ajv = new Ajv();
const FieldOwnerSchema = {
    type:"object",
    properties:{
        
    },
    required:[],
    additionalProperties:false
}
const FieldOwnerValidate = ajv.compile(FieldOwnerSchema);

module.exports = FieldOwnerValidate;

