const tape = require("tape");

const runDbBuild = require("../database/db_build");
const getData = require("../queries/getData");
const postData = require("../queries/postData");

//Checks if Tape works
tape("Tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("Tests", t => {
  runDbBuild((err, res) => {
    const Contact = {
      first_name: "Ghassan",
      last_name: "Gharzuzy",
      intrests: "Not math",
      email: "g4ss4n@gmail.com",
      phone_number: "0544431898"
    };

    test("Test that getData gets data from DB", t => {
      getData()
        .then(result => console.log("post result = ", result))
        // .then(
        //   getData("Test").then(result => {
        //     t.deepEqual(console.log(result), "returns the correct info from DB");
        //     t.end();
        //   })
        // )
        .catch(error => {
          if (error) console.log("we have an error with the query: ", error);
        });
    });

    test("Test that PostData posts to DB", t => {
      postData()
        .then(result => console.log("post result = ", result))
        // .then(
        //   queries.getAllUserLogs("Test").then(result => {
        //     t.deepEqual(
        //       result[0].username,
        //       newMealLog.username,
        //       "Loads what's added in the BD"
        //     );
        //     t.end();
        //   })
        // )
        .catch(error => {
          if (error) console.log("we have an error with the query: ", error);
        });
    });
  });
});
