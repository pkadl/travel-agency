import React from 'react';
// import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';



const OrderForm = props => (
  console.log('orderformProps', props.tripCost, props.options),

  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} opts={props.options}/>
    </Col>
  </Row>
  
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};


export default OrderForm;