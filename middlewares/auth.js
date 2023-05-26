
const jwt = require('jsonwebtoken')
let authMiddleware = async (req, res, next)=>{
    const authHeader = req.headers.authorization

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     throw new UnauthenticatedError('No token provided')
//   }
console.log("1");
  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const { id, username } = decoded
    req.user = { id, username }

    next()

  } catch (error) {
    return res.json({error: error.message})
  }
}


module.exports = authMiddleware