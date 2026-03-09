const User = require('../models/user.model')

async function userSignIn(req, res) {
    const {email, password} = req.body

    console.log(req.body);

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password)

        if(!token) res.send("sign in no token")

        res.cookie("token", token)
        res.send("signin complete")
    } catch (error) {
            return res.send(error)
    }

}

 async function userSignUp(req , res){
    // console.log(req.body);
    
    const {name, password, email, phone} = req.body

    const user = await User.findOne({email})

     if(user){
        res.send("email already exists")
     }

     await User.create({
        name: name,
        password: password,
        email: email,
        phone: phone
     })

     res.redirect('/')
}

function logout(req, res)  {
    res.clearCookie("token").send("logout complete")
}

async function getUsers(req, res){
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

async function getUser(req, res){
    try {
        const user = await User.findById(req.params.id)

        res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

async function updateUser(req, res){
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

module.exports = {
    userSignUp,
    userSignIn,
    getUsers,
    getUser,
    updateUser,
    logout
}