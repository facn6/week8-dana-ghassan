const dbConnection = require("../database/db_connection");

const postData = (
  first_name,
  last_name,
  interests,
  email,
  phone_number) => {
  return new Promise((resolve,reject)=>{
    dbConnection.query(
    "INSERT INTO contacts (first_name,last_name,interests,email,phone_number) VALUES ($1, $2, $3 ,$4,$5)",
    [first_name, last_name, interests, email, phone_number],
    (err, res) => {
      if(err)
      {
        reject(err);
      }else{
        resolve(res);
      }
    });
  
});
}

module.exports = postData;
