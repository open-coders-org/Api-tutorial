'use strict'
const {db} = require('../DB/database')
const {get_hash} = require('../crypt/bcrypt-hash')
let save_user = async function (req,res) {
    try {
        let {username , pass , rol} = req.body
        if (!username || !pass || !rol) return res.status(400).send({ok : false,message : 'faltan datos'})
        let hash = get_hash(pass)
        
        let result = await  db.query('INSERT INTO user (username,pass,rol) values (?,?,?)',[username,hash,rol])
        return res.status(201).send({message :  "test in save user"})
        
    } catch (error) {
        return res.status(500).send({
            ok : false,
            error
        })
        
    }
    
}

let delete_user = async function (req,res){
        let {id} = req.params

        try{
            let result  = await db.query('DELETE FROM user WHERE id = ?',[id])
            
            if (result[0].affectedRows === 0) return res.status(404).send({
                ok : false,
                message  : 'El usuario no existe'
            })
            
            return res.status(200).send({
                ok : true,
                message : "El usuario ha sido eliminado"
            })
        }catch(err){
            return res.status(500).send({err})
        }
        
}



module.exports = {
    save_user,
    delete_user
}