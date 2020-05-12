let {db} = require('../src/DB/database')

let verify_admin = async function(req,res,next){
    let {rol} = req.info

    if (rol === 1){
        next()
    }else return res.status(301).send({
        ok : false,
        message : 'no es un admin'
    })
    


    

}

module.exports = {
    verify_admin
}