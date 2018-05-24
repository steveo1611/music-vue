let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'User'
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT = 10

const USERS = [
    'guest',
    'member',
    'admin'
]

let schema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true, dropDups: true},
    hash: { type: String, required: true},
    created: { type: Number, required: true, default: Date,now() },
    userLevel: {
        type: String, required: true, enum: USERS, default: 'guest`
    },
    watchListId: { type: ObjectId, ref: 'watchlist' }
})

schema.statics.generateHash = function(password) {
    return bcrypt.hashSync(password, SALT)
}

schema.method.validatePasswsord = function(password) {
    return bcrypt.compare(password, this.hash)
}

module.exports = mongoose.model(schemaName, schema)
