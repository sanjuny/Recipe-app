const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "12345678",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

pool.on("connect",()=>{
    console.log("Database connected");
})

pool.on("end",()=>{
    console.log("Database Disconnected");
})
module.exports = pool