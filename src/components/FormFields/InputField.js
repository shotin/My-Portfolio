import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types'

const InputField = ({ controlId, label, name, ...props }) => {
  return (
    <Form.Group controlId={name} >
      <Form.Label>{label}</Form.Label>
      <Form.Control 
      name={name} 
      {...props} 
      />
      
    </Form.Group>
  );
};



InputField.defaultProps = {
    type: "text"
}

InputField.propTypes = {
    controlId: PropTypes.string,
    label: PropTypes.string,
}

export default InputField;
