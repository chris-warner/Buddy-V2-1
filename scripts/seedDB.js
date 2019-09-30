const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Dogs collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/buddy");

const dogSeed = [
  {
    "age" : 4.0,
    "breed": "pitbull",
    "weight": 60.0,
    "image": "url",
    "video": "url",
    "shelterName": "Animal Rescue",
    "shelterStreet": "65 Dog place",
    "shelterZipcode": 10409,
    "shelterCity": "New Brunswick",
    "shelterState": "New Jersey",
    "shelterCountry": "United States",
    "shelterPhone": 917-000-0000,
    "shelterDayBookedStart": 07,
    "shelterMonthBookedStart": 09,
    "shelterYearBookedStart": 2019,
    "shelterDayBookedEnd": 09,
    "shelterMonthBookedEnd": 09,
    "shelterYearBookedEnd": 2019,
    "shelterTimeBookedStart": "9:30am",
    "shelterTimeBookedEnd": "2:00pm",
    "shelterIsBooked": true
  }
];

db.Dog.remove({})
  .then(() => db.Dog.collection.insertMany(dogSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  