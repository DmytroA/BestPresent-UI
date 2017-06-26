import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import Toggle from 'material-ui/Toggle';
import ava from '../../../media/ava.jpg';

class HotelCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({ expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  goToPage = () => {
    browserHistory.push(`/hotel/${this.props.id}`);
  }

  render() {
    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar={ava}
          actAsExpander
          showExpandableButton
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        <CardMedia
          expandable
          overlay={<CardTitle title={this.props.hotelName} subtitle={this.props.hotelCategory} />}
        >
          <img src={`data:image/jpeg;base64,${this.props.hotelImage}`} alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable />
        <CardText expandable>
          <span dangerouslySetInnerHTML={{ __html: this.props.hotelDescription }} />
        </CardText>
        <CardActions>
          <FlatButton label="Open" onTouchTap={this.goToPage} />
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}

HotelCard.propTypes = {
  id: React.PropTypes.string,
  hotelName: React.PropTypes.string,
  hotelCategory: React.PropTypes.string,
  hotelImage: React.PropTypes.string,
  hotelDescription: React.PropTypes.string,
};

export default HotelCard;
