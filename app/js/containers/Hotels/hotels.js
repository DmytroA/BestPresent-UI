import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import { Pagination } from '../../components/Pagination';
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
          key={item.Id}
          name={item.Name}
          page="hotel"
          category={item.Category}
          image={item.ImageData}
          description={item.Description}
        />);
    return (
      <div className={theme.container}>
        {hotelIds}
        {this.props.pagination &&
          <Pagination
            onChange={this.props.onChangePage}
            {...this.props.pagination}
          />
        }
      </div>
    );
  }
}

Hotels.propTypes = {
  getHotels: React.PropTypes.func,
  hotels: React.PropTypes.array,
  loading: React.PropTypes.bool,
  error: React.PropTypes.string,
  pagination: React.PropTypes.shape({
    total: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    totalNumberOfPages: React.PropTypes.number,
  }),
  onChangePage: React.PropTypes.func.isRequired,
};

export default Hotels;
