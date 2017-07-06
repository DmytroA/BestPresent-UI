import React from 'react';
import {
  RaisedButton,
} from 'material-ui';
import isEmpty from 'lodash/isEmpty';
import Input from '../../components/input';
import theme from './theme.scss';

class AddCountryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      filePath: this.props.imageData,
      name: this.props.name,
      description: this.props.description,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.setState({ id: nextProps.id });
    }
    if (this.props.imageData !== nextProps.imageData) {
      this.setState({ filePath: nextProps.imageData });
    }
    if (this.props.name !== nextProps.name) {
      this.setState({ name: nextProps.name });
    }
    if (this.props.description !== nextProps.description) {
      this.setState({ description: nextProps.description });
    }
  }

  onFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const result = dataUrl.split('base64,')[1];
      this.setState({
        filePath: result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    e.preventDefault();
  }

  submit = (e) => {
    e.preventDefault();
    this.props.onAddCountry({
      Name: this.state.name,
      Description: this.state.description,
      ImagePath: this.state.filePath,
    });
  }
  edit = (e) => {
    e.preventDefault();
    this.props.onEditCountry(this.props.id, {
      Name: this.state.name,
      Description: this.state.description,
      ImagePath: this.state.filePath,
    });
  }


  render() {
    return (
      <div className={theme.container}>
        <form onChange={this.onFieldChange}>
          {this.state.id &&
            <Input
              name="id"
              value={this.state.id.toString()}
              label="Id"
            />
          }
          <br />
          <Input
            name="name"
            value={this.state.name}
            label="Name"
            editable
          /><br />
          <br />
          <Input
            name="description"
            value={this.state.description}
            label="description"
            editable
          /><br />
          {!isEmpty(this.state.filePath) &&
            <img src={`data:image/jpeg;base64,${this.state.filePath}`} alt="" />
          }
          <br />
          <RaisedButton
            label="Choose an Image"
            labelPosition="before"
            containerElement="label"
          >
            <input
              type="file"
              name="image"
              onChange={this.handleChange}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '0',
                bottom: '0',
                right: '0',
                left: '0',
                width: '100%',
                opacity: '0',
              }}
            />
          </RaisedButton>
        </form>
        {isEmpty(this.props.id) &&
          <RaisedButton
            label="Edit"
            onTouchTap={this.edit}
          />
        }
      </div>
    );
  }
}

AddCountryForm.propTypes = {
  id: React.PropTypes.number,
  filePath: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  imageData: React.PropTypes.string,
  editable: React.PropTypes.bool,
  onAddCountry: React.PropTypes.func,
  onEditCountry: React.PropTypes.func,
};

export default AddCountryForm;
