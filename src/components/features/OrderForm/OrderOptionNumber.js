import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, price, setOptionValue, limits}) => (
  <div className={styles.number}>
    <input type='number'
      className={styles.inputSmall}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      min={limits.min}
      max={limits.max} 
    />
    &nbsp; {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func, 
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber ;