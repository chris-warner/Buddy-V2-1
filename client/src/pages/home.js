import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import SearchComponent from "../components/Search/search";
import axios from "axios";
import RealDataBase from "../RealDataBase";
let shelterZipCodeArray = [];
class Home extends React.Component {
  
  //ToDo add constructor, state, component did mount and axios function to store shelters in state.
  constructor(props) {
    super(props);
    this.state = {
      dogs:[]
    };
  }

  componentDidMount() {
    axios.get('/api/dogs/').then(res => {
      console.log(res.data);
      this.setState({ dogs: res.data }) //simple value
      console.log(this.state.dogs);
    });
  };


  render() {
    return (
      <div className="home-page">
        <div className="myHeader">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent suggestions={shelterZipCodeArray} ></SearchComponent>
        </div>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Home;