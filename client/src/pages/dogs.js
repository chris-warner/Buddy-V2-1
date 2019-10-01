import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import DogComponent from "../components/Dog/dog";
import { CardDeck, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import FakeDataBase from '../FakeDataBase';
import Map from "../components/GoogleMap/map";
import API from '../utils/API.js';

class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      zip:[],
      dogs:[],
      results:[]
    };
  }

  componentDidMount() {
    //access props history with the next line.
    const state = this.props.location.state
    this.setState({
      dogs: API.getDogsByShelter('1014')
      .then(res=>{this.createDogCardDecks()}),
      zip: this.props.location.search,
      results: this.createDogCardDecks()
    });
  }

  render() {
    console.log(this.state.dogs[0]);
    console.log(this.state.zip);
    return (
      <div className="dog-page">
        <div className="myHeader">
         <HeaderComponent />
        </div>
        <div className="myDogs">
          {this.state.results}
        
        </div>
        <div>
          <Map></Map>
        </div>
        <div className="myFooter">
          <FooterComponent />
        </div>
      </div>
    );
  }
  

  createDogCardDecks = () => {
    API.getDogsByShelter('1014').then(res=>{
    let table = []
    let k = 0
    let children = []
    });
  
  }
}

export default withRouter(Dogs);
