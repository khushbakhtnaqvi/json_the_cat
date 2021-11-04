const request = require('request');
const args = process.argv.slice(2);
const name = args[0];
let data;
request(`https://api.thecatapi.com/v1/breeds/search?name=${name}`, (error, response, body) => {
  if (error) {
    console.log("Request error:", error);
    return;
  }
  data = JSON.parse(body);

  //console.log(res);
  if (data[0]) {
    const res = data[0]['description'];
    console.log("Description:", res);
  } else {
    console.log("Breed Not Found");
  }


});
  
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching ${name} Breed...`);
//     //setTimeout(() => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     //}, 3000);
//   });
// };

// const breedDescription = () => { Promise(findBreed(name)).then((data) => console.log(data[0]['description'])).catch(error)};