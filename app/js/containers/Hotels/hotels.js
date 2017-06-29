import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import theme from './theme.scss';

class Hotels extends Component {
  componentDidMount() {
    this.props.getHotels();
  }
  render() {
    const hotelIds = this.props.hotels &&
      this.props.hotels.map(item =>
        <Card
          id={item.Id}
          name={item.Name}
          category={item.Category}
          image={item.ImageData}
          description={item.Description}
        />);
    return (
      <div className={theme.container}>
        {hotelIds}
      </div>
    );
  }
}

Hotels.propTypes = {
  getHotels: React.PropTypes.func,
  hotels: React.PropTypes.array,
  loading: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default Hotels;
