let jwt = require('jsonwebtoken')

let is_auth = function (req,res,next)  {
    let {authorization} = req.headers
    if (!authorization) return res.status(401).send({
        ok : false, 
        message : 'falta token'
    })
    token = authorization.split(' ')[1]
    jwt.verify(token , '123445', (err , decoded) => {
        if (err) return res.status(401).send({
            ok : false , 
            message : 'acceso denegado'
        })
        req.info = decoded
        next()
        
    })
    
 
    
}

module.exports = {
    is_auth
}