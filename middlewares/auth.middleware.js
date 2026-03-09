const {validateToken} = require('../services/auth.service')

const protect = (req, res, next) => {
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                message: "Not authenticated"
            })
        }

        const decoded = validateToken(token);

        req.user = decoded

        next()
    }catch (error){
        return res.status(401).json({
            message: "Invalid or Expired Token"
        })
    }
}

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!req.user){
            return res.status(401).json({
                message: "User not authenticated"
            })
        }

        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message: "Access Denied"
            })
        }

        next()
    }
}



module.exports = {
    protect,
    authorizeRoles
}