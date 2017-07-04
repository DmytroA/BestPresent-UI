import React from 'react';
import {
  RaisedButton,
} from 'material-ui';
import Input from '../../components/input';
import theme from './theme.scss';

class AddCountryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: this.props.filePath,
      name: this.props.name,
      description: this.props.description,
    };
  }

  onFieldChange = (e) => {
    console.log('test');
    this.setState({
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  }

  handleChange = (e) => {
    this.setState({
      filePath: e.target.value,
    })
    e.preventDefault();
  }

  submit = (e) => {
    console.log('2');
    e.preventDefault();
    this.props.onSubmitChanges({
      Name: this.state.name,
      Description: this.state.description,
      ImageData: this.state.filePath,
    })
  }


  render() {
    return (
      <div>
        <form onChange={this.onFieldChange}>
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
          <Input
            name="filePath"
            value={this.state.filePath}
            label="filePath"
            editable
          /><br />
          <RaisedButton
            label="Choose an Image"
            labelPosition="before"
            containerElement="label"
          >
            <input
              type="file"
              value={this.state.filePath}
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
        <RaisedButton
          label="SAVE"
          onTouchTap={this.submit}
        />

      </div>
    );
  }
}

AddCountryForm.propTypes = {
  filePath: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  editable: React.PropTypes.bool,
  onSubmitChanges: React.PropTypes.func.isRequired,
};

export default AddCountryForm;
