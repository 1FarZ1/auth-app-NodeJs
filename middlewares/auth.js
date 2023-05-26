
const jwt = require('jsonwebtoken');

let authMiddleware = async (req, res, next)=>{
    const authHeader = req.headers.authorization
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