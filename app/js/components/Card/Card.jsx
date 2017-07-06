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

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  goToPage = () => {
    browserHistory.push(`/${this.props.page}/${this.props.id}`);
  }

  handleEdit = () => {
    this.props.onSelect(this.props.id);
    browserHistory.push('/admin');
  }

  render() {
    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
        style={{
          maxWidth: '600px',
          minWidth: '100px',
        }}
      >
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar={ava}
          actAsExpander
          showExpandableButton
        />
        <CardMedia
          expandable
          overlay={
            <CardTitle
              title={this.props.name}
              subtitle={this.props.category ? this.props.category : 'test'}
            />}
        >
          <img src={`data:image/jpeg;base64,${this.props.image}`} alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable />
        <CardText expandable>
          <span dangerouslySetInnerHTML={{ __html: this.props.description }} />
        </CardText>
        <CardActions>
          <FlatButton label="Open" onTouchTap={this.goToPage} />
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
          <FlatButton label="Edit" onTouchTap={this.handleEdit} />
        </CardActions>
      </Card>
    );
  }
}

HotelCard.propTypes = {
  id: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  name: React.PropTypes.string,
  category: React.PropTypes.string,
  page: React.PropTypes.string,
  image: React.PropTypes.string,
  description: React.PropTypes.string,
  onSelect: React.PropTypes.func,
};

export default HotelCard;
