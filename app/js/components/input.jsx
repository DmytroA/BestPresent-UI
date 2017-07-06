import React from 'react';
import { TextField } from 'material-ui';
import styles from './styles.scss';

const Input = ({
  name,
  defaultValue,
  label,
  error,
  editable = false,
  value,
  onChange,
  type,
  inputStyle,
  inline = false,
}) => (
  <TextField
    name={name}
    defaultValue={defaultValue}
    floatingLabelText={label}
    errorText={error}
    disabled={!editable}
    className={!editable ? styles.disabledInput : null}
    value={value}
    onChange={onChange}
    type={type}
    inputStyle={inputStyle}
    floatingLabelStyle={{
      fontSize: '14px',
      color: '#B9BAC1',
      textTransform: 'uppercase',
      fontFamily: 'Oxygen, Helvetica, sans-serif',
    }}
    underlineStyle={{
      borderColor: '#B9BAC1',
    }}
    underlineFocusStyle={{
      borderColor: '#67D587',
    }}
    style={{
      width: inline ? '100%' : '200px',
      display: 'block',
      cursor: 'auto',
      top: label ? '-10px' : '0',
    }}
    errorStyle={{
      color: '#E77253',
    }}
  />
);

Input.propTypes = {
  name: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  defaultValue: React.PropTypes.string,
  label: React.PropTypes.string,
  error: React.PropTypes.string,
  editable: React.PropTypes.bool,
  inline: React.PropTypes.bool,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  type: React.PropTypes.string,
  inputStyle: React.PropTypes.object,
};

export default Input;
