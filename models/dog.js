const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  weight: { type: Number, required: true },
  image: { type: String, required:false },
  video: { type: String, required:false },
  shelterName: {type: String, required:true },
  shelterStreet:{ type: String, required: true },
  shelterZipcode:{ type: Number, required: true },
  shelterCity: {type: String, required: true },
  shelterState: {type: String, required: true },
  shelterCountry: {type: String, required: true, default: "United States" },
  shelterPhone: { type: Number, required:true },
  shelterDayBookedStart: { type: Date }, 
  shelterMonthBookedStart: { type: Date },
  shelterYearBookedStart: { type: Date }, 
  shelterDayBookedEnd: { type: Date }, 
  shelterMonthBookedEnd: { type: Date },
  shelterYearBookedEnd: { type: Date }, 
  shelterTimeBookedStart: { type: String},
  shelterTimeBookedEnd: { type: String },
  shelterIsBooked: { type: Boolean, required: true, default:false },
 // date: { type: Date, default: Date.now }
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
