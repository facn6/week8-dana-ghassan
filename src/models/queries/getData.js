const databaseConnection = require("../database/db_connection.js");


const getData =()=> {
  return new Promise((resolve,reject)=>{
  databaseConnection.query("SELECT * FROM contacts",(err,res)=>{
    if(err)
    {
      reject(err);
    }else{
      resolve(res);
    }
  });
  })
  
};



module.exports = {
    getData
  };