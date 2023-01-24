const pool = require("../db")

const postSignup = async (req, res) => {
    try {
        let { name, userid, password } = req.body
        let result = pool.query(`SELECT * FROM userdata WHERE userid = $1`, [userid], (err, results) => {
            if (err) {
                console.log(err);
            }
            // console.log(results.rows);
            // if (results.rows.length > 0) {
            //     return res.render('register', {
            //         message: 'Email is already registered'
            //     })
            // } else {
            pool.query(`INSERT INTO userdata(name,userid,password)VALUES($1,$2,$3)RETURNING name,userid,password`, [name, userid, password], (err, results) => {
                if (err) {
                    console.log(err,'ceeeeeeeeeeeee')
                    throw err;
                }
                // console.log(results.rows);
            })
            // }
        })
    } catch (error) {
        console.log(error, 'signuperrro');
    }
}

module.exports = {
    postSignup
}