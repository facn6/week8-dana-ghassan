const dbConnection = require("../database/db_connection");

const postData = (
  first_name,
  last_name,
  interests,
  email,
  phone_number,
  cb
) => {
  dbConnection.query(
    "INSERT INTO contacts (first_name,last_name,interests,email,phone_number) VALUES ($1, $2, $3 ,$4,$5)",
    [first_name, last_name, interests, email, phone_number],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
