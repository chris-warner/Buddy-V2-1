import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import DogComponent from "../components/Dog/dog";
import { CardDeck, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import fakeDogs from '../FakeDataBase';
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
      .then(res=>{console.log(res)}),
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
    var dogs =[];
    dogs = this.state.dogs
    let table = []
    let k = 0
    let children = []

    dogs.forEach(function(dogs1) {
      console.log(dogs1.name)
          table.push( <DogComponent 
            key={dogs1.name}
            dogsId={dogs1.name} 
            name={dogs1.name} 
            age={dogs1.age} 
            breed={dogs1.breed} image={dogs1.image}></DogComponent>)
            // CardDeck.push(<CardDeck>{children}</CardDeck>)
      });
    return table
  }
  
}
  


export default withRouter(Dogs);