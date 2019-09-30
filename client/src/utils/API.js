import React from 'react';
import axios from 'axios';

class API {
     getDatabase() {
    var dogs = [];
    var zipcodeArray = [];
   
    axios.get('/api/dogs/').then(res => {
      dogs = res.data;
      for (var i = 0; i < res.data.length; i++) {
        zipcodeArray.push(res.data[i].shelterZipcode.toString())
      }
      console.log(this.state.dogs);
      console.log(this.state.zipcodes)
    });
    //All db contents should now be stores in global variables.
   }
}

export default API;