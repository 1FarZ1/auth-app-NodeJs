const jwt = require('jsonwebtoken');
let login = (req,res)=>{
    // login the user using the jwt ?
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).send('Username or password incorrect');
    }

    const user = { username, password };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    console.log("user logged in");


    return res.json({ accessToken: accessToken });

    
}

let dashboard = (req,res)=>{
    const user  =  req.user;
    console.log(user);
    }


module.exports = {
    login,
    dashboard
}

