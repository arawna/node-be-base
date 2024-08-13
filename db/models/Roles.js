const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_name: {type: String, required: true},
    isActive: {type: Boolean, default: true},
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
},{
    versionKey: false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})

class Roles extends mongoose.Model {

}

schema.loadClass(User);
module.exports = mongoose.model("roles", schema);