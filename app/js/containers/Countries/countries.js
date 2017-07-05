import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import { Pagination } from '../../components/Pagination';
import theme from './theme.scss';

class Countries extends Component {
  componentDidMount() {
    this.props.getCountries();
  }
  render() {
    const countries = this.props.countries &&
      this.props.countries.map(item =>
        <Card
          id={item.Id}
          key={item.Id}
          page="country"
          name={item.Name}
          image={item.ImageData}
          description={item.Description}
        />);
    return (
      <div className={theme.container}>
        {countries}
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

Countries.propTypes = {
  getCountries: React.PropTypes.func,
  countries: React.PropTypes.array,
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

export default Countries;
