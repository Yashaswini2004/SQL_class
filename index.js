const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); 
const path = require("path");
const express = require("express");

const app = express();

// Set up JSX rendering engine
app.set("view engine", "jsx");
app.set("views", path.join(__dirname, "/views"));
app.engine("jsx", require("express-react-views").createEngine());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Yashaswini@2004',
    database: 'pandeyji_eatery',
});

// Function to generate a random user (not used in this script, but can be useful)
const getRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.username(),
    ];
};
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) AS count FROM user`; // Fix: Use 'AS count' for easy access

    connection.query(q, (err, result) => {
        if (err) {
            console.error("Database Query Error:", err);
            return res.status(500).send("Database Error");
        }

        let count = result[0].count; // Fix: Access 'count' instead of 'COUNT(*)'
        res.render("Home", { count }); // Fix: Do not use ".jsx" in res.render
    });
});
app.get("/users",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let r=result;
            res.render("Users",{r});
        })
    }
    catch(err){
        console.log(err);
    }
});
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;  // Get ID from URL
    console.log("User ID:", id);  // Debugging step
    res.render("Edit", { id });  // Pass ID to the view
});



app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
