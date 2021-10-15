const { pool } = require("../config/db");

const createTx = (data) => {
    return new Promise(async (resolve, reject) => {
        const txdata = {
        id: data.user.id,
        creator_id: data.creator_id,
        crypto_id: data.crypto_id,
        seller_id: data.seller_id,
        buyer_id: data.buyer_id,
        receiving_wallet: data.receiving_wallet,
        crypto_amt: data.crypto_amt,
        fiat_amt: data.fiat_amt,
        fiat_id: data.fiat_id,
        ads_id: data.ads_id,
        closed: data.closed,
        cancelled: data.cancelled,
        fee: data.fee,
        created_at: data.created_at
        }

        // Custion
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'INSERT INTO transactions set ?', txdata,
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
const viewTx = (data) => {
    return new Promise(async (resolve, reject) => {
        const viewtxn = {
            user_id = data.id
        }
        // Custion
        //create a new account
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'SELECT * FROM transactions WHERE id = ?',viewtxn,
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


const viewTxs = (data) => {
    return new Promise(async (resolve, reject) => {
        const viewtxns = {
            creator_id: data.creator_id
        }
        // Custion
        //create a new account
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'SELECT * FROM transactions WHERE id = ?',viewtxns,
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

const deleteTx = (data) => {
    return new Promise(async (resolve, reject) => {
        
        // Custion
        const del = {
            tx_id: data.id
        }
        // Custion
        //create a connection
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'DELETE FROM transactions WHERE id = ?;SET cancelled = 1',del,
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
const closeTx = (data) => {
    return new Promise(async (resolve, reject) => {

        // Custion
        const close = {
            tx_id: data.id
        }
        // Custion
        //create a connection
        pool.getConnection((err, connection) => {
    
            if (err) {
                reject(false)
            }

            connection.query(
                'UPDATE transactions SET close = 1 WHERE id = ?',close,
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
    createTx,
    viewTx,
    viewTxs,
    closeTx,
    deleteTx
}