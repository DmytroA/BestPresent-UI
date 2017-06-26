import React, { Component } from 'react';

class Hotel extends Component {
  componentDidMount() {
    this.props.getHotel(this.props.params.id);
  }
  render() {
    return (
      <div>
        {this.props.hotel.Id}
      </div>
    );
  }
}

Hotel.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  getHotel: React.PropTypes.func,
  hotel: React.PropTypes.array,
  loading: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default Hotel;
