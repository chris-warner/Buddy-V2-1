import axios from "axios";

const shelters = [
  "10409",
  "10410"
];
// Export an object containing methods we'll use for accessing the random user API
export default {
  //original: getUsersByLanguage
  //new: getDogsByShelter

  getDogsByShelter: function(shelterzipcode) {
    return new Promise((resolve, reject)=> {
      axios.get("api/dogs").then((res)=> {
        console.log(res.data);
        const dogs = res.data;
        const results = dogs.map((dog) => {
          return {
            name: dog.name,
            breed: dog.breed,
            shelter: dog.shelterName,
            image: dog.image,
            shelterzip: shelterzipcode,
          }
        })
        resolve(results);
      }).catch((err) => reject(err));
    })
  },
  // Return a Promise to simulate an async call
  getShelterList: function() {
    return new Promise((resolve)=> {
      resolve(shelters);
    });
  }
};
