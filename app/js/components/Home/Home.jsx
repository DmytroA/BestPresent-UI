import React, { Component } from 'react';
import Card from '../../containers/Card';

class Home extends Component {
  componentDidMount() {
    this.props.getHotels();
  }
  render() {
    const hotelIds = this.props.hotels &&
      this.props.hotels.map(item =>
        <Card
          id={item.Id}
          hotelName={item.Name}
          hotelCategory={item.Category}
          hotelImage={item.ImageData}
          hotelDescription={item.Description}
        />);
    return (
      <div>
        {hotelIds}
      </div>
    );
  }
}

Home.propTypes = {
  getHotels: React.PropTypes.func,
  hotels: React.PropTypes.array,
  loading: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default Home;
