const express = require("express");
const { isNumber } = require("util");
const util = require("util");
const app = express();
const port = "3000";
app.use(express.json());

app.listen(port, () => {
  console.log("Backend is running at port 3000");
});

app.post("/bfhl", async (req, res) => {
  console.log("Sending reponse of POST request");

  try {
    let data = req.body.data;
    let numbers = [];
    let alphabets = [];
    let success = true;

    if (data.length == 0) {
      success = false;
    }

    data.forEach((element) => {
      if (isNaN(element)) {
        alphabets.push(element);
      } else {
        numbers.push(element);
      }
    });

    res.send(
      JSON.parse(
        JSON.stringify({
          is_success: success,
          user_id: "muskan_10112001",
          email: "muskan0681.cse19@chitkara.edu.in",
          roll_number: "1910990681",
          numbers: numbers,
          alphabets: alphabets,
        })
      )
    );
    console.log(res);
  } catch (error) {}
});
