const { pool } = require("./../config/db");
const bcrypt = require("bcrypt");

const createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        // check email is exist or not
        const isEmailExist = await checkExistEmail(data.email);
        if (isEmailExist) {
            reject(`This email "${data.email}" has already exist. Please choose another email`);
        } else {
            // hash password
            const salt = bcrypt.genSaltSync(10);
            const userItem = {
                fullname: data.fullname,
                email: data.email,
                password: bcrypt.hashSync(data.password, salt),
            };

            //create a new account
            pool.getConnection((err, connection) => {
                
                if (err) {
                    reject(false)
                }

                connection.query(
                    'INSERT INTO users set ?', userItem,
                    function(error, rows, fields) {
                        connection.release();
                        if (error) {
                            reject(false)
                        }
                        resolve("Registration successful");
                    }
                );
            });
            
        }
    });
};

const checkExistEmail = (email) => {
    return new Promise( (resolve, reject) => {
        try {

            pool.getConnection((err, connection) => {

                if (err) {
                    reject(false)
                }
                connection.query(
                    ' SELECT * FROM `users` WHERE `email` = ?  ', email,
                    function(error, rows) {
                        if (error) {
                            reject(error)
                        }
                        if (rows.length > 0) {
                            resolve(true)
                        } else {
                            resolve(false)
                        }
                    }
                );
            });
            
        } catch (err) {
            reject(err);
        }
    });
};


module.exports = {
    createNewUser: createNewUser
};
