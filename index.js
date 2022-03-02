const express = require("express");
const dotenv = require("dotenv");
const { isNumber } = require("util");
const util = require("util");
const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API is listening at port ${PORT}`);
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
