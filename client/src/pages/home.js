import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import SearchComponent from "../components/Search/search";
import axios from "axios";
import RealDataBase from "../RealDataBase";
import API from '../utils/API.js';

let shelterZipCodeArray = [];
class Home extends React.Component {
  
  //ToDo add constructor, state, component did mount and axios function to store shelters in state.
  constructor(props) {
    super(props);
    this.state = {
      dogs:[],
      zipcodes:[]
    };
  }

  componentDidMount() {
    // //temporary array to store db contents.
    // let zipcodeArray = [];
    // axios.get('/api/dogs/').then(res => {
    //   this.setState({ dogs: res.data });
    //   for (var i = 0; i < res.data.length; i++) {
    //     zipcodeArray.push(res.data[i].shelterZipcode.toString())
    //   }
    //   //update state to temporary arraay.
    //   this.setState({ zipcodes: zipcodeArray });
    //   console.log(this.state.dogs);
    //   console.log(this.state.zipcodes)
    // });
    // //All db contents should now be stores in components state and ready for
    this.loadDogs();
  };

  loadDogs = () => {
    console.log('load dogs function running')
        API.getDogsByShelter('10410').then((dogs) => {
          return this.setState({
            shelters: '10410',
            dogs: dogs,
            dog: dogs[0]
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log('This.state.dogs:');
    console.log(this.state.dogs)
    console.log('This.state.dog:');
    console.log(this.state.dog)
    return (
     

      <div className="home-page">
        <div className="myHeader">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent suggestions={this.state.zipcodes} dogs={this.state.dogs} ></SearchComponent>
        </div>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Home;