'use strict'
const {db} = require('../DB/database')
const {get_hash} = require('../crypt/bcrypt-hash')
let save_user = async function (req,res) {
    try {
        let {username , pass , rol} = req.body
        if (!username || !pass || !rol) return res.status(400).send({ok : false,message : 'faltan datos'})
        let hash = get_hash(pass)
        console.log(hash);
        
        let result = await  db.query('INSERT INTO user (username,pass,rol) values (?,?,?)',[username,hash,rol])
        return res.status(201).send({message :  "test in save user"})
        
    } catch (error) {
        return res.status(500).send({
            ok : false,
            error
        })
        
    }
    
}



module.exports = {
    save_user
}