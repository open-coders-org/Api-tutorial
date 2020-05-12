const jwt = require('jsonwebtoken')
const {db} = require('../DB/database')
const bcrypt= require('bcrypt')


let login = async function (req,res){
    let {pass , username} = req.body
    if (!pass || !username) return res.status(404).send({ok : false,message : 'bad request'})

    try {
        let query = await db.query('select id, username, pass , rol from user where username = ?',[username, pass])
        let data = query[0][0]
        bcrypt.compare(pass, data.pass, (err , result) => {
            if (err) return res.status(401).send({
                ok : false,
                message : 'acceso denegado'
            })
            if (result){
               var token =  jwt.sign({
                    id : data.id,
                    username : data.username,
                    rol : data.rol
                }, "123445")
                return res.status(200).send({
                    ok : true,
                    token 
                })


            } else return res.status(301).send({
                ok : false, 
                message : 'acceso denegado'
            })


        })
        
        
        
        
    } catch (error) {
        return res.status(500).send({
            ok : false , 
            error
        })
    }
    
}

module.exports = {
    login
    
}