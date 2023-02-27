const Ajv = require("ajv");
var ajv = new Ajv();
const FieldSchema = {
    type:"object",
    properties:{
        
    },
    required:[],
    additionalProperties:false
}
const FieldValidate = ajv.compile(FieldSchema);

module.exports = FieldValidate;

