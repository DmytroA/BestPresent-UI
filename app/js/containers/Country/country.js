import React, { Component } from 'react';

class Country extends Component {
  componentDidMount() {
    this.props.getCountry(parseInt(this.props.params.id, 10));
  }
  render() {
    return (
      <div>
        {this.props.country.Name}
      </div>
    );
  }
}

Country.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.number,
  }),
  getCountry: React.PropTypes.func,
  country: React.PropTypes.object,
  loading: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default Country;
