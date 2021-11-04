const request = require('request');
let data;
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error,null);
      return;
    }
    data = JSON.parse(body);
  
    if (data[0]) {
      callback(null,data[0]['description']);
    } else {
      let desc = "Breed Not Found";
      callback(null,desc);
    }
  });
};


module.exports = {fetchBreedDescription};
