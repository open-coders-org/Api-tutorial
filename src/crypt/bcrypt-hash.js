'use strict'
const bcrypt = require('bcrypt')
/**
 * 
 * @param {text plain } plain_text
 * @returns { hash of text plain} hash
 * @description {} 
 */

let get_hash = function (plain_text) {
    try{
        let hash = bcrypt.hashSync(plain_text,10)
        return hash
    }catch(err){
    throw(err)
    }
   
}

module.exports = {
    get_hash
}