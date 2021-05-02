const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
var name1 = "";
var reason1= "";
var fromdate1="";
var todate = "";
var mentorid1 = "";
const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "password",
    port: 3305,
    database: "vitpass"
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


app.listen(3001,() => {
    console.log("Running on port 3001");
});

app.post("/api/login", (req,res) => {
const regid = req.body.regid;
const password = req.body.password;
console.log("yaha pe hi")
    const sqlselect = "SELECT * FROM studentdata WHERE regid = ? AND password =?;"
    db.query(sqlselect,[regid,password] ,(err,result) => {
       if(err){
        console.log(err);
       }

       if(result) {
           console.log(result);
        res.send(result);
      
       }
       else{
           res.send({message: "Not Found!!"});
       }
    })
})
app.post("/api/loginparent", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log("yaha pe hi")
        const sqlselect = "SELECT * FROM parentdata WHERE email = ? AND password =?;"
        db.query(sqlselect,[email,password] ,(err,result) => {
           if(err){
            console.log(err);
           }
    
           if(result) {
               console.log(result);
            res.send(result);
          
           }
           else{
               res.send({message: "Not Found!!"});
           }
        })
    })
    app.post("/api/loginmentor", (req,res) => {
        const regid = req.body.regid;
        const password = req.body.password;
        console.log("yaha pe hi")
            const sqlselect = "SELECT * FROM mentordata WHERE regid = ? AND password =?;"
            db.query(sqlselect,[regid,password] ,(err,result) => {
               if(err){
                console.log(err);
               }
        
               if(result) {
                   console.log(result);
                res.send(result);
              
               }
               else{
                   res.send({message: "Not Found!!"});
               }
            })
        })
        app.post("/api/loginwarden", (req,res) => {
            const regid = req.body.regid;
            const password = req.body.password;
            console.log("yaha pe hi")
                const sqlselect = "SELECT * FROM wardendata WHERE regid = ? AND password =?;"
                db.query(sqlselect,[regid,password] ,(err,result) => {
                   if(err){
                    console.log(err);
                   }
            
                   if(result) {
                       console.log(result);
                    res.send(result);
                  
                   }
                   else{
                       res.send({message: "Not Found!!"});
                   }
                })
            })

app.post('/api/leaverequest',(req,res) =>{
    
const regid = req.body.regid;
const name = req.body.name;
const mentorid = req.body.mentorid;
const fromdate = req.body.fromdate;
const todate = req.body.todate;
const reason = req.body.reason;
console.log(regid);
console.log(name);
console.log(mentorid);
console.log(fromdate);
console.log(todate);
console.log(reason);
   const sqlInsert = "INSERT INTO studentleave(regid,name,mentorid,fromdate,todate,reason) VALUES (?,?,?,?,?,?);"
    db.query(sqlInsert,[regid,name,mentorid,fromdate,todate,reason],(err,result) =>{
        console.log(err);
        res.send(result);
        console.log(result);
    })  
});
app.post('/api/parentapprove',(req,res) =>{
    
    const regid = req.body.regid;
       const sqlInsert = "INSERT INTO mentorleave(regid,name,mentorid,fromdate,todate,reason,approve) SELECT * FROM studentleave WHERE regid = ? ;"
        db.query(sqlInsert,[regid],(err,result) =>{
            console.log(err);
            res.send(result);
            console.log(result);
        }) 
        
    });
    app.post('/api/mentorapprove',(req,res) =>{
    
        const regid = req.body.regid;
           const sqlInsert = "INSERT INTO wardenleave(regid,name,mentorid,fromdate,todate,reason,approve) SELECT * FROM mentorleave WHERE regid = ? ;"
            db.query(sqlInsert,[regid],(err,result) =>{
                console.log(err);
                res.send(result);
                console.log(result);
            }) 
            
        });
        app.post('/api/wardenapprove',(req,res) =>{
    
            const regid = req.body.regid;
               const sqlInsert = "INSERT INTO allyes(regid) VALUES (?);"
                db.query(sqlInsert,[regid],(err,result) =>{
                    console.log(err);
                    res.send(result);
                    console.log(result);
                })
                const sqldelete = "DELETE FROM studentleave WHERE regid = ?;"
                db.query(sqldelete,[regid],(err,result) =>{
                    console.log(err);
                    //res.send(result);
                    console.log(result);
                })
                
            });
            app.post('/api/notapprove',(req,res) =>{
    
                const regid = req.body.regid;
                   const sqlInsert = "INSERT INTO allno(regid) VALUES (?);"
                    db.query(sqlInsert,[regid],(err,result) =>{
                        console.log(err);
                        res.send(result);
                        console.log(result);
                    }) 
                    const sqldelete = "DELETE FROM studentleave WHERE regid = ?"
                    db.query(sqldelete,[regid],(err,result) =>{
                        console.log(err);
                       // res.send(result);
                        console.log(result);
                    })
                    
                });
    

app.post('/api/getstudent',(req,res) =>{
    
    const regid = req.body.regid;
    console.log(regid);
       const sqlInsert = "SELECT * FROM studentleave WHERE regid = ?;"
        db.query(sqlInsert,[regid],(err,result) =>{
            console.log(err);
            res.send(result);
            console.log(result);
        })  
    });
    app.post('/api/getmentorstudent',(req,res) =>{
    
        const regid = req.body.regid;
        console.log(regid);
           const sqlInsert = "SELECT * FROM mentorleave WHERE regid = ?;"
            db.query(sqlInsert,[regid],(err,result) =>{
                console.log(err);
                res.send(result);
                console.log(result);
            })  
        });

        app.post('/api/getwardenstudent',(req,res) =>{
    
            const regid = req.body.regid;
            console.log(regid);
               const sqlInsert = "SELECT * FROM mentorleave WHERE regid = ?;"
                db.query(sqlInsert,[regid],(err,result) =>{
                    console.log(err);
                    res.send(result);
                    console.log(result);
                })  
            });
            app.post('/api/viewstatusyes',(req,res) =>{
    
                const regid = req.body.regid;
                console.log(regid);
                   const sqlInsert = "SELECT * FROM allyes WHERE regid = ?;"
                    db.query(sqlInsert,[regid],(err,result) =>{
                        console.log(err);
                        res.send(result);
                        console.log(result);
                    })  
                });
                app.post('/api/viewstatusno',(req,res) =>{
    
                    const regid = req.body.regid;
                    console.log(regid);
                       const sqlInsert = "SELECT * FROM allno WHERE regid = ?;"
                        db.query(sqlInsert,[regid],(err,result) =>{
                            console.log(err);
                            res.send(result);
                            console.log(result);
                        })  
                    });
                    app.post('/api/viewstatuspending',(req,res) =>{
    
                        const regid = req.body.regid;
                        console.log(regid);
                           const sqlInsert = "SELECT * FROM studentleave WHERE regid = ?;"
                            db.query(sqlInsert,[regid],(err,result) =>{
                                console.log(err);
                                res.send(result);
                                console.log(result);
                            })  
                        });
