const { pool } = require("../config/db");

const createNewBank = (data) => {
    return new Promise(async (resolve, reject) => {
        const bankdata = {
            id: req.user.id,
            user_name: data.user_name,
            account_number: data.account_number,
            bank_name: data.bank_name,
            created_at: data.created_at,
        };

        // Custion
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'INSERT INTO localbank set ?', bankdata,
                function(error, rows, fields) {
                    connection.release();
                    if (error) {
                        reject(false)
                    }
                    resolve("Successful");
                }
            );
        });
    });
}
const viewUserBank = (data) => {
    return new Promise(async (resolve, reject) => {
        const viewbank = {
            user_id = data.id
        };
        // Custion
        //create a new account
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'SELECT user_name,account_number,bank_name FROM localbank WHERE id = ?',viewbank,
                function(error, rows, fields) {
                    connection.release();
                    if (error) {
                        reject(false)
                    }
                    resolve("Successful");
                }
            );
        });
    });
}


const viewAllBank = (data) => {
    return new Promise(async (resolve, reject) => {
        const viewbanks = {
            id: data.id
        };
        // Custion
        //create a new account
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'SELECT * FROM transactions WHERE id = ?',viewbanks,
                function(error, rows, fields) {
                    connection.release();
                    if (error) {
                        reject(false)
                    }
                    resolve("Successful");
                }
            );
        });
    });
}

const deleteBank = (data) => {
    return new Promise(async (resolve, reject) => {
        
        // Custion
        const del = {
            bank_id: data.id
        };
        // Custion
        //create a connection
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'DELETE FROM transactions WHERE id = ?',del,
                function(error, rows, fields) {
                    connection.release();
                    if (error) {
                        reject(false)
                    }
                    resolve("Successful");
                }
            );
        });
    });
}
const updateBank = (data) => {
    return new Promise(async (resolve, reject) => {

        // Custion
        const update = {
            id: req.user.id,
            user_name: data.user_name,
            account_number: data.account_number,
            bank_name: data.bank_name,
            updated_at: data.updated_at,
        };
        // Custion
        //create a connection
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'UPDATE localbank SET close = 1 WHERE id = ?',update,
                function(error, rows, fields) {
                    connection.release();
                    if (error) {
                        reject(false)
                    }
                    resolve("Successful");
                }
            );
        });
        
    });
}


module.exports = {
    updateBank,
    deleteBank,
    viewAllBank,
    viewUserBank,
    createNewBank
}