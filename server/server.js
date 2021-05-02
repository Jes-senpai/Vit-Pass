const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "password",
    port: 3305,
    database: "emer"
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


app.listen(3001,() => {
    console.log("Running on port 3001");
});

app.get('/api/getdetails',(req,res) =>{
    
   
    console.log("yaha")
       const sqlInsert = "SELECT * FROM data;"
        db.query(sqlInsert,(err,result) =>{
            console.log(err);
            res.send(result);
            console.log(result);
        }) 
        
    });
    app.post('/api/delete',(req,res) =>{
    
   const name = req.body.name;
        console.log("yaha")
           const sqlInsert = "DELETE FROM data WHERE name = ? ;"
            db.query(sqlInsert,[name],(err,result) =>{
                console.log(err);
                //res.send(result);
                console.log(result);
            }) 
            
        });
        app.post('/api/add',(req,res) =>{
    
            const name = req.body.name;
            const age = req.body.age;
            const location = req.body.location;
            const contact = req.body.contact;
                 console.log("yaha")
                    const sqlInsert = "INSERT INTO data(name,Age,Location,Contact) VALUES(?,?,?,?) ;"
                     db.query(sqlInsert,[name,age,location,contact],(err,result) =>{
                         console.log(err);
                         //res.send(result);
                         console.log(result);
                     }) 
                     
                 });
    