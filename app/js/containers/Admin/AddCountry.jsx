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
    this.setState({
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const result = dataUrl.split("base64,")[1];
      this.setState({
        filePath: result,
      })
    }
    if (file) {
      const name = reader.readAsDataURL(file);
    }
    e.preventDefault();
  }

  submit = (e) => {
    e.preventDefault();
    this.props.onSubmitChanges({
      Name: this.state.name,
      Description: this.state.description,
      ImagePath: this.state.filePath,
    })
  }


  render() {
    return (
      <div className={theme.container}>
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
              id="image"
              name="image"
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
