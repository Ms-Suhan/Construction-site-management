const User = require('../models/user.model')

async function getUsers(req, res){
    try {
        const users = await User.find({}, {
            _id : 1,
            name: 1,
            email: 1,
            role: 1,
            skills: 1,
            assigned_projects: 1,
            profile_image_url : 1,

        })
        res.json(users)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

async function getUser(req, res){
    try {
        const user = await User.findById(req.params.id)

        user_payload = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            skills: user.skills,
            assigned_projects: user.assigned_projects,
            profile_image_url : user.profile_image_url,


        }
        res.json(user_payload)
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


async function getMe(req, res){
    try{
        const user_id = req.params.id

        const user = await User.findById(user_id)

        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        res.status(200).json({
            user
        })
    }catch (error){
        res.status(500).json({messagaddWorkere : error.message})
    }
}

module.exports = {
    getUsers,
    getUser,
    updateUser,
    getMe
}