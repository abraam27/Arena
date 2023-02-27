const Ajv = require("ajv");
var ajv = new Ajv();
const AdminSchema = {
    type:"object",
    properties:{
        
    },
    required:[],
    additionalProperties:false
}
const AdminValidate = ajv.compile(AdminSchema);

module.exports = AdminValidate;

