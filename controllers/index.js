const jwt = require('jsonwebtoken');
let login = ()=>{
    // login the user using the jwt ?
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).send('Username or password incorrect');
    }
    
    const user = { username, password };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    return res.json({ accessToken: accessToken });

    
}

let dashboard = ()=>{
    console.log('dashboard function')
}


module.exports = {
    login,
    dashboard
}

