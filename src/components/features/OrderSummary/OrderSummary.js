import React from 'react';
import styles from './OrderSummary.scss';
//import { Grid, Row, Col, PageTitle } from 'react-flexbox-grid';
// import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const OrderSummary = props => (
  console.log('orTTTTs', props.tripCost, props.opts),
   
  <div className={styles.component}>
    <h2>
        Total: <strong> {calculateTotal(formatPrice (props.tripCost), props.opts)}</strong>  
     
    </h2>
  </div>


);

OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};
export default OrderSummary;