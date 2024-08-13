const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id: {type:mongoose.SchemaTypes.ObjectId, required: true},
    created_by: {type:mongoose.SchemaTypes.ObjectId, required: true},
    permission: {type:String, required: true}
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

class RolePrivigeles extends mongoose.Model {

}

schema.loadClass(RolePrivigeles);
module.exports = mongoose.model("role_privigeles", schema);