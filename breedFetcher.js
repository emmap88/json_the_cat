const request = require("request");

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

request(url, (error, response, body) => {
  if (error) {
    console.log("Error fetching details:", error);
    console.log(error.message); // print error message
    console.log(error.stack); // print error stack trace
  } else {
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(data[0].description);
    }
  }
});
