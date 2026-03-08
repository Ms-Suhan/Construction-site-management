const mongoose = require('mongoose')
const {randomBytes, createHmac} = require('crypto')
const {createTokenForUser} = require('../services/auth.service')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type :String,
        required: true,
        unique: true
    },
    password: {
        type :String,
        required: true
    },
    phone: {
        type: String
    },
    role: {
        type: String,
        enum: [
            "admin",
            "manager",
            "site_engineer",
            "worker",
            "warehouse_manager",
            "accountant",
            "client"
        ],
        default: "worker"
    },
    skills: [String],

    assigned_projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },

    salt :{
        type: String
    },

    profile_image_url: {
        type: String,
        default: '/images/default.png'
    }

}, { timestamps: true})


userSchema.pre('save', function(next){
    const user = this;

    if(!user.isModified('password')) return next();

    const salt = randomBytes(16).toString('hex')
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest('hex')

    this.salt = salt
    this.password = hashedPassword

    next
})

userSchema.statics.matchPasswordAndGenerateToken = async function(email, password) {
    const user = await User.findOne({email})

    if(!user) throw new Error("User not found!!")

    const salt = user.salt
    const hashedPassword = user.password

    const userPasswordHash = createHmac('sha256', salt).update(password).digest('hex')

    if(userPasswordHash !== hashedPassword){
        throw new Error("Invalid Password!!")
    }

    const token = createTokenForUser(user)

    console.log(token);

    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User
